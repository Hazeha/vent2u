import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Main UI
import { NotFoundComponent } from './404/notfound.component';
import { DashboardModule } from './dashboard/dashboard.module';


import { AuthModule } from './auth/auth.module';
// Modules TODO Should be moved to dashboard.

import { LogoutComponent } from './_components/Header/logout/logout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LogoutComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
