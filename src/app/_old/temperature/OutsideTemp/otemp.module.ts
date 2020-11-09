import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OTempComponent } from './otemp.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// Shared Services
import { WeatherService } from '../../../shared/_services/Weather/weather.service';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [WeatherService],
  bootstrap: [OTempComponent]
})
export class OTempModule {}
