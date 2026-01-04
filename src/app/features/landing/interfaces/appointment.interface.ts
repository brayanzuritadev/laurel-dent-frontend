export interface Appointment {
    appointment_id:   number;
    patient:          string;
    doctor:           string;
    appointment_date: Date;
    duration_minutes: number;
    status:           string;
}