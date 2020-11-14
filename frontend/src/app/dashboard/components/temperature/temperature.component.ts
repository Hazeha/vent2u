import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { PresetService } from '../../../_services/preset.service';

@Component({
    selector: 'app-temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['../../../_styles/compView.component.css']
})
export class TemperatureComponent implements OnInit{
    testId = '1';
    @Input() temp: number;
    @Input() fan: number;
    @Output() temperatureEvent = new EventEmitter<number>();
    shadowToggle = true;

    currentPreset: any;

    constructor(private presetService: PresetService) { }

    onTempChanged(value: number) {
        this.temperatureEvent.emit(value);
    }

 // TODO Need to make some kind of updater to db
  // formatTemperature(value: number) {
  //   this.temperature = value;
  //   return this.temperature + '\u00B0';
  // }
  // changeTemperature(event: any) {
  //   this.temperature = event.value;
  //   this.presetService.temp = this.temperature;
  //   return;
  // }
  // formatFanSpeed(value: number) {
  //   this.fanSpeed = value;
  //   return this.fanSpeed + '%';
  // }
  // changeFanSpeed(event: any) {
  //   this.fanSpeed = event.value;
  //   this.presetService.fan = this.fanSpeed;
  //   return;
  // }

  getPresets(id){
    this.presetService.getPresets(id).subscribe(data => {
        this.currentPreset = data;
        console.log(data + 'Temp');
      },
      error => {
        console.log(error);
      });
  }

  ngOnInit() {
      this.getPresets(this.testId);
  }
}
