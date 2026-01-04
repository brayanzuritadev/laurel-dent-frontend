import { Routes } from '@angular/router';
import { Landing } from './features/landing/landing';
import { Dashboard } from './features/dashboard/dashboard';
import { AuthLayout } from './features/auth/layout/auth-layout/auth-layout';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes'),
        //TODO: Guards
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: '',
        component: Landing,
    },
    {
        path: '**',
        redirectTo: '',
    }
];
