import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLayoutComponent } from '../../../app-shared-ui/dashboard-layout/dashboard-layout.component';

export const dashboard_routes: Routes = [
    {
        path: "dashobard",
        component: DashboardLayoutComponent,
        children: [
            { path: "", component: DashboardComponent }
        ]
    },
    { path: "dashboard2", component: DashboardComponent }
];
