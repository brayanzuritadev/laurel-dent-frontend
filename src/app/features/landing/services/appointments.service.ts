import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import type { AppointmentsPublicResponse } from '../interfaces/appointments.interface';
import type { Appointment } from '../interfaces/appointment.interface';
import { AppointmentMapper } from '../mapper/appointment.mapper';

@Injectable({providedIn: 'root'})
export class AppointmentService {

    private http = inject(HttpClient)

    appointments = signal<Appointment[]>([])

    constructor() {
        this.loadAppointments();
    }

    loadAppointments() {
        this.http.get<AppointmentsPublicResponse[]>(`${environment.laurelDentUrl}/public/appointments`,{
            params: {
                parameter:'cbcvb'
            }
        }).subscribe( (resp) => {
            const appointments = AppointmentMapper.mapAppointmentsPublicToAppointmentArray(resp);
            this.appointments.set(appointments)
            console.log({appointments})
        })
    }
}