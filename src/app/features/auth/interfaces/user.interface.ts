export interface User {
    user_id:    number;
    ci:         string;
    full_name:  string;
    email:      string;
    phone:      string;
    role:       Role;
    created_at: Date;
    updated_at: Date;
}

export interface Role {
    role_id:   number;
    role_name: string;
}
