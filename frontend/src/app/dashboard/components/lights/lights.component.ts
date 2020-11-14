import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { PresetService } from '../../../_services/preset.service';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['../../../_styles/compView.component.css']
})
export class LightsComponent implements OnInit {
  @Output() lightEvent = new EventEmitter<number>();

  constructor(private presetService: PresetService) { }



  shadowToggle = true;
  lights = this.presetService.lights || 0;
  lightsText = this.presetService.lightsText || 'Off';

  // Test Site
  // presetID = 1;
  // presets: any;


  ngOnInit(): void {
    // this.getPresets(this.presetID);
  }

  // getPresets(id){
  //   this.presetService.getPresets(id).subscribe(data => {
  //     this.presets = data;
  //     console.log(data);
  //   },
  //   error => {
  //     console.log(error);
  //   });
  // }

  formatLights(value: number) {
    switch (value) {
      case 0:
        this.lightsText = 'Off';
        break;
      case 1:
        this.lightsText = 'Dim';
        break;
      case 2:
        this.lightsText = 'Norm';
        break;
      case 3:
        this.lightsText = 'Full';
        break;
      default:
        break;
    }
    return this.lightsText;
  }
  lightsChange(event: any) {
    this.lights = event.value;
    this.presetService.lights = this.lights;
    switch (event.value) {
      case 0:
        this.lightsText = 'Off';
        break;
      case 1:
        this.lightsText = 'Dim';
        break;
      case 2:
        this.lightsText = 'Norm';
        break;
      case 3:
        this.lightsText = 'Full';
        break;
      default:
        this.lightsText = 'Error';
        break;
    }
    this.presetService.lightsText = this.lightsText;
    return;
  }


}
