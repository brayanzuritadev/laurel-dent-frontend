import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html'
})
export class Header {
  headers = [
    {
      name: 'Iniciar sesión',
      url: '/auth/login'
    },
    {
      name: 'Registrarse',
      url: '/auth/register'
    },
  ]
}
