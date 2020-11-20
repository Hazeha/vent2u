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
          this.message = 'Preset Updated';
        },
        error => {
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
          this.message = 'Preset Updated';
        },
        error => {
        });
  }
}
