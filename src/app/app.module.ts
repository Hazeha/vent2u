import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Main UI
import { NotFoundComponent } from './404/notfound.component';
import { DashboardModule } from './dashboard/dashboard.module';


// Modules TODO Should be moved to dashboard.
import { TemperatureModule } from './_old/temperature/temperature.module';
import { HumidityModule } from './_old/humidity/humidity.module';

import { AuthModule } from './auth/auth.module';
import { ClassModule } from './_old/class/class.module';
import { LogoutComponent } from './shared/_components/Header/logout/logout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NotInUseModalComponent } from './shared/_components/not-in-use-modal/not-in-use-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

    LogoutComponent,
    NotInUseModalComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    TemperatureModule,
    HumidityModule,
    AuthModule,
    DashboardModule,
    ClassModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
