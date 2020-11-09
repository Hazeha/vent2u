// Author:
// Nikolaj Drejer
//
// Desription:
// Dashboard module that controls the UI after login


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MainComponent } from '../_old/main/main.component';
import { ClaimComponent} from '../_old/claim/claim.component';

import { ClaimGridModule } from '../shared/_components/claim-grid/claim-grid.module';

import { HeaderComponent } from '../shared/_components/Header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from '../shared/_components/Navigation/navigation.component';

// Pipelines
import { CelsiusPipe } from '../celsius.pipe';
import { ControlComponent } from './components/control/control.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import { LightsComponent } from './components/lights/lights.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { SettingsComponent } from './components/settings/settings.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    DashboardComponent,
    // Pages
    MainComponent,
    ClaimComponent,
    HeaderComponent,
    NavigationComponent,
    CelsiusPipe,
    ControlComponent,
    LightsComponent,
    CheckinComponent,
    SettingsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    ClaimGridModule,
    MatCardModule,
    MatDividerModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,

  ],
  exports: [
    CelsiusPipe
  ]
})
export class DashboardModule { }
