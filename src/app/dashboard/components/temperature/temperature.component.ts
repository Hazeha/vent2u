import { Component, EventEmitter, Output, Input } from '@angular/core';
import {ControlService} from '../../services/control.service';

@Component({
    selector: 'app-temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['../../../_styles/compView.component.css']
})
export class TemperatureComponent {
    @Input() temp: number;
    @Output() temperatureEvent = new EventEmitter<number>();
    onTempChanged(value: number) {
        this.temperatureEvent.emit(value);
    }

  constructor(private pr: ControlService) { }
  shadowToggle = true;
  humidity = this.pr.humidity || 0;
  temperature = this.pr.temperature || 18;
  lights = this.pr.lights || 0;
  lightsText = this.pr.lightsText || 'Off';

  formatTemperature(value: number) {
    this.temperature = value;
    return this.temperature + "\u00B0";
  }
  temperatureChange(event: any) {
    this.temperature = event.value;
    this.pr.temperature = this.temperature;
    return;
  }
}
