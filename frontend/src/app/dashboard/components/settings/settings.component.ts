import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../_services/user.service";
import {PresetService} from "../../../_services/preset.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['../../../_styles/compView.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private userService: UserService, private presetService: PresetService) { }

  private msg: string;
  currentUser = null;
  currentPreset = null;

  // This is for testing
  testUserId = 1;
  ngOnInit(): void {
    this.getPresets(this.testUserId);
    this.msg = '';
    this.getUser(this.testUserId);
  }
  // This is for user loading
  getUser(id): void{
    this.userService.getUser(id)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  // This is for preset loading
  getPresets(id): void{
    this.presetService.getPresets(id).subscribe(data => {
        this.currentPreset = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }


}
