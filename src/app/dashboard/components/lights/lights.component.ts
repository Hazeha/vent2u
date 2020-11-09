import { Component, OnInit } from '@angular/core';
import { ControlService } from '../../services/control.service';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['../../../_styles/compView.component.css']
})
export class LightsComponent implements OnInit {
  constructor(private pr: ControlService) { }
  shadowToggle = true;
  lights = this.pr.lights || 0;
  lightsText = this.pr.lightsText || 'Off';

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
    this.pr.lights = this.lights;
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
    this.pr.lightsText = this.lightsText;
    return;
  }
  ngOnInit(): void {
  }

}
