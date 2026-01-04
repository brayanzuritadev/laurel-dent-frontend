import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Header } from "../../../landing/components/header/header";
import { LoginPage } from '../../pages/login-page/login-page';

@Component({
  selector: 'app-auth-layout',
  imports: [LoginPage],
  templateUrl: './auth-layout.html'
})
export class AuthLayout {
  
}
