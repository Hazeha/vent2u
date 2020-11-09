
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PresetsComponent } from './presets.component';

// Material Design
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    PresetsComponent  ],
  exports: [
    PresetsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ]
})
export class PresetsModule { }
