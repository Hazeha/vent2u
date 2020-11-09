
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material Design
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

// View Components
import { HumidityComponent } from './humidity.component';

import { HumiditySlider } from './HumiditySlider/hslider.component';

// Modules
import { OHumidityComponent } from './OutsideHumidity/ohumidity.component';
import { OHumidityModule } from './OutsideHumidity/ohumidity.module';

// Shared Components
import { PresetsModule } from '../../shared/_components/Presets/presets.module';
@NgModule({
  declarations: [
    HumidityComponent,
    HumiditySlider,
    OHumidityComponent
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
    PresetsModule,
    OHumidityModule
  ]
})
export class HumidityModule { }
