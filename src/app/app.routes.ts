import { Routes } from '@angular/router';
import { dashboard_routes } from './modules/dashboard/dashboard.routes';
import { auth_routes } from './modules/auth/auth.routes';

export const routes: Routes = [
    ...dashboard_routes,
    ...auth_routes
];
