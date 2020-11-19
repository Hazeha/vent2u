import { Component, OnInit } from '@angular/core';
import {PresetService} from "../../../../_services/preset.service";

@Component({
  selector: 'app-login-modal',
  templateUrl: './model.component.html'
})
export class LoginModalComponent implements OnInit {

  constructor(private presetService: PresetService) { }
  currentPresets = this.presetService;

  ngOnInit(): void {
  }

}
