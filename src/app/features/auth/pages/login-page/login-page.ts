import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Message } from 'primeng/message';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ButtonModule, Message, CheckboxModule, InputTextModule, PasswordModule, ReactiveFormsModule],
  templateUrl: './login-page.html'
})
export class LoginPage {
  fb = inject(FormBuilder)
  authService = inject(AuthService);
  hasError = signal(false);
  isPosting = signal(false);
  router = inject(Router);


  loginForm: FormGroup = this.fb.group({
    email: ['brayan@gmail.com', [Validators.required, Validators.email]],
    password: ['asfdsfgsdfgsdfg', [Validators.required, Validators.minLength(6)]],
  });
  
  onSubmit() {
    if (this.loginForm.invalid) {
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 2000)
      this.loginForm.reset();
      return;
    }

    const {email = '', password = ''} = this.loginForm.value;

    this.authService
    .login(email, password)
    .subscribe( isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigateByUrl('/dashboard')
        this.loginForm.reset();
        return;
      }

      setTimeout(() => {
        this.hasError.set(false);
      }, 2000)
    })
  }
}
