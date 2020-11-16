import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Presets } from '../../../_interface/preset';
import { PresetService } from '../../../_services/preset.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['../../../_styles/compView.component.css'],
  providers: [PresetService]
})
export class TemperatureComponent implements OnInit{
  testId = 1;
  message = '';
  currentPresets: any;
  dataTemp: any;
  dataFan: any;
  constructor(private presetService: PresetService) { }
  ngOnInit(): void {
    this.message = '';
    this.getPresets(this.testId);
  }
  getPresets(id): void {
    this.presetService.getPresets(id)
      .subscribe(presetData => (this.currentPresets = presetData));
  }
  updateTemp(newTemp: number): void {
    this.dataTemp = {
      temp: newTemp
    };
    this.presetService.putPresets(this.currentPresets.id, this.dataTemp)
      .subscribe(
        response => {
          this.currentPresets.temp = newTemp;
          console.log(response);
          this.message = 'Preset Updated';
        },
        error => {
          console.log(error);
        });
  }
  updateFan(newFan: number): void {
    this.dataFan = {
      fan: newFan
    };

    this.presetService.putPresets(this.currentPresets.id, this.dataFan)
      .subscribe(
        response => {
          this.currentPresets.fan = newFan;
          console.log(response);
          this.message = 'Preset Updated';
        },
        error => {
          console.log(error);
        });
  }

/** Not in use
    testId = '1';
    @Input() temp;
    @Input() fan;
    @Output() temperatureEvent = new EventEmitter<number>();
    shadowToggle = true;


    onTempChanged(value: number) {
        this.temperatureEvent.emit(value);
    }

 TODO Need to make some kind of updater to db
  formatTemperature(value: number) {
    this.temperature = value;
    return this.temperature + '\u00B0';
  }
  changeTemperature(event: any) {
    this.temperature = event.value;
    this.presetService.temp = this.temperature;
    return;
  }
  formatFanSpeed(value: number) {
    this.fanSpeed = value;
    return this.fanSpeed + '%';
  }
  changeFanSpeed(event: any) {
    this.fanSpeed = event.value;
    this.presetService.fan = this.fanSpeed;
    return;
  }

  getPresets(id){
    this.presetService.getPresets(id).subscribe(data => {
        this.currentPreset = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
*/
}
