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

  saveSettings() {
    this.newData = {
      username: this.userFormControl,
      first_name: this.fnameFormControl,
      last_name: this.lnameFormControl
    };
    this.userService.putSettings(this.data.id, this.newData)
      .subscribe(
        response => {
          this.currentUser.username = this.userFormControl;
          this.currentUser.first_name = this.fnameFormControl;
          this.currentUser.last_name = this.lnameFormControl;
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

