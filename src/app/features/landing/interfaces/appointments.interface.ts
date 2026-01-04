export interface AppointmentsPublicResponse {
    appointment_id:   number;
    patient:          Doctor;
    doctor:           Doctor;
    appointment_date: Date;
    duration_minutes: number;
    status:           Status;
    note:             string;
    created_at:       Date;
}

export interface Doctor {
    full_name: string;
    role:      Role;
}

export interface Role {
    role_id:   number;
    role_name: string;
}

export interface Status {
    status_id:   number;
    status_name: string;
}
