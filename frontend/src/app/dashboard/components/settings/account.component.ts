import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {UserService} from "../../../_services/user.service";
import {PresetService} from "../../../_services/preset.service";
import {CheckinComponent} from "../checkin/checkin.component";
import {SettingsComponent} from "./settings.component";



export interface AccountData {
  user: 'panda';
}
export interface PresetData {
  keys: 'panda' | 'unicorn' | 'lion';
}

@Component({
  templateUrl: `./account.component.html`,
  selector: 'dialog-data'
})
export class DialogDataComponent {
  currentUser: any = {
    username: ''
  };
  username: any;
  userFormControl: any;
  fnameFormControl: any;
  lnameFormControl: any;
  matcher: any;
  message: any;
  newData: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService
  ) {}

  saveSettings(username, firstname, lastname) {
    this.newData = {
      username,
      first_name: firstname,
      last_name: lastname
    };
    this.userService.putUser(this.data.id, this.newData)
      .subscribe(
        response => {
          this.currentUser.username = this.userFormControl;
          this.currentUser.first_name = this.fnameFormControl;
          this.currentUser.last_name = this.lnameFormControl;
          this.message = 'Preset Updated';
          console.log(this.newData);
        },
        error => {
        });
  }
}
@Component({
  templateUrl: `./setpre.component.html`,
  selector: 'dialog-preset'
})
export class DialogPresetComponent {
  newData: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private presetService: PresetService) {}

  saveSettings(tempSlider, fanSlider, lightSlider) {
    this.newData = {
      temp: tempSlider,
      fan: fanSlider,
      light: lightSlider
    };
    this.presetService.putPresets(this.data.id, this.newData)
      .subscribe(
        response => {
          console.log(this.newData);
        },
        error => {
        });
  }
}

