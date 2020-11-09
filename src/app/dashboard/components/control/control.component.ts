import { Component, OnInit } from '@angular/core';
import { ControlService } from '../../services/control.service';


@Component({
  selector: 'app-controle-compoent',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
