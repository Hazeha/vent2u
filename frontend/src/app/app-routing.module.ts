// Author:
// Nikolaj Drejer
//
// Desription:
// Routing module for routes.
// We use child routes to our dashboard main view - only accessible after login
// Login and notfound is the two other Main Routes.

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Login Guard
import { AuthGuard } from './auth/auth.guard';

// Main Routes - Depending on login status.
import { NotFoundComponent} from './404/notfound.component'; // Unknown page
import { LoginComponent } from './auth/login/login.component'; // Login for dashboard
import { DashboardComponent } from './dashboard/dashboard.component'; // This is the UI behind Auth - This is our main view.

import { TemperatureComponent } from './dashboard/components/temperature/temperature.component';
import { LightsComponent } from './dashboard/components/lights/lights.component';
import { CheckinComponent } from './dashboard/components/checkin/checkin.component';
import { SettingsComponent } from './dashboard/components/settings/settings.component';

const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent, canLoad: [AuthGuard],
    children: [
      { path: 'CheckIn', component: CheckinComponent },
      { path: 'Temperature', component: TemperatureComponent, },
      { path: 'Lights', component: LightsComponent },
      { path: 'Settings', component: SettingsComponent }
    ] },
  { path: '',   component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
