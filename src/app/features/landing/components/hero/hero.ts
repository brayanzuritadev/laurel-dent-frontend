import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormUtils } from '../../../../utils/form-utils';
import { AppointmentService } from '../../services/appointments.service';

@Component({
  selector: 'app-hero',
  imports: [ReactiveFormsModule, InputTextModule],
  templateUrl: './hero.html'
})
export class Hero {
  appointmentsService = inject( AppointmentService ) 

  private fb = inject(FormBuilder);
  formUtils = FormUtils

  /*myForm: FormGroup = this.fb.group({
    ci: ['', [Validators.required, Validators.minLength(6)]/*validadores sincronos*//*, /*validadores asincronos*//*]*/
  /*})

  onSubmit(){
    console.log("test new")
    this.myForm.reset();
  }*/

  phone = '59176950045';

  goToWhatsApp() {
    window.open(`https://wa.me/${this.phone}`, '_blank');
  }
}
