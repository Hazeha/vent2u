import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { PresetService } from '../../../_services/preset.service';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['../../../_styles/compView.component.css']
})
export class LightsComponent implements OnInit {
  testId = 1;
  message = '';
  currentPresets: any;
  dataLight: any;

  constructor(private presetService: PresetService) { }
  ngOnInit(): void {
    this.getPresets(this.testId);
  }
  getPresets(id): void {
    this.presetService.getPresets(id)
      .subscribe(presetData => (this.currentPresets = presetData));
  }
  updateLight(newLight: number): void {
    this.dataLight = {
      light: newLight
    };
    this.presetService.putPresets(this.currentPresets.id, this.dataLight)
      .subscribe(
        response => {
          this.currentPresets.light = newLight;
          this.message = 'Preset Updated';
        },
        error => {
        });
  }
}
