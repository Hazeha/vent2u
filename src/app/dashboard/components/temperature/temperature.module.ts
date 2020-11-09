
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material Design
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

// View Components
import { TemperatureComponent } from './temperature.component';
import { OTempComponent } from './OutsideTemp/otemp.component';
import { OTempModule } from './OutsideTemp/otemp.module';

// Shared Modules
import { PresetsModule } from '../../../_components/Presets/presets.module';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [
    TemperatureComponent,

    OTempComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatSliderModule,
    MatToolbarModule,
    OTempModule,
    PresetsModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class TemperatureModule { }
