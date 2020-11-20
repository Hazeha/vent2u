import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {UserService} from "../../../_services/user.service";
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
  currentUser: any;
  username: any;
  nameFormControl: any;
  emailFormControl: any;
  userFormControl: any;
  matcher: any;
  message: any;
  newData: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private settingsComponent: SettingsComponent
  ) {}

  saveSettings() {
    this.newData = {
      username: this.userFormControl,
      first_name: this.nameFormControl,
      email: this.emailFormControl
    };
    this.userService.putSettings(this.settingsComponent, this.newData)
      .subscribe(
        response => {
          this.currentUser.username = this.nameFormControl;
          this.currentUser.first_name = this.userFormControl;
          this.currentUser.email = this.emailFormControl;
          this.message = 'Preset Updated';
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
  presetFormControl: any;
  tempFormControl: any;
  fanFormControl: any;
  lightFormControl: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: PresetData) {}
}

