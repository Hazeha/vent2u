// Author:
// Nikolaj Drejer
//
// Desription:
// Dashboard module that controls the UI after login


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';

import { HeaderComponent } from '../_components/Header/header.component';
import { NavigationComponent } from '../_components/Navigation/navigation.component';

import { TemperatureComponent } from './components/temperature/temperature.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { LightsComponent } from './components/lights/lights.component';
import { SettingsComponent } from './components/settings/settings.component';


import { OTempComponent } from './components/temperature/OutsideTemp/otemp.component';
import { OTempModule } from './components/temperature/OutsideTemp/otemp.module';
// Pipelines
import { CelsiusPipe } from '../celsius.pipe';


// FUCK THIS!
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

import { MaterialModule } from '../_material/material.module';




@NgModule({
  declarations: [
    DashboardComponent,
    // Pages
    HeaderComponent,
    NavigationComponent,
    CheckinComponent,
    TemperatureComponent,
    LightsComponent,
    SettingsComponent,

    OTempComponent,
    CelsiusPipe,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    OTempModule,

    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
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
