import type { Appointment } from "../interfaces/appointment.interface";
import { AppointmentsPublicResponse } from "../interfaces/appointments.interface";

export class AppointmentMapper {

    static mapAppointmentsPublicToAppointment(item: AppointmentsPublicResponse): Appointment {
        return {
            appointment_id: item.appointment_id,
            appointment_date: item.appointment_date,
            duration_minutes: item.duration_minutes,
            patient: item.patient.full_name,
            doctor: item.doctor.full_name,
            status: item.status.status_name
        }
    }

    static mapAppointmentsPublicToAppointmentArray(items: AppointmentsPublicResponse[]): Appointment[] {
        return items.map(this.mapAppointmentsPublicToAppointment);
    }
}