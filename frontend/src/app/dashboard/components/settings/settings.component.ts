import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../_services/user.service';
import {PresetService} from '../../../_services/preset.service';
import {DialogDataComponent, DialogPresetComponent} from './account.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['../../../_styles/compView.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private userService: UserService, private presetService: PresetService, public dialog: MatDialog) { }

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
        },
        error => {
        });
  }
  // This is for preset loading
  getPresets(id): void{
    this.presetService.getPresets(id).subscribe(data => {
        this.currentPreset = data;
      },
      error => {
      });
  }

  accDialog(): void {

    this.dialog.open(DialogDataComponent, {
      data: {
        id: this.currentUser.id,
        username: this.currentUser.username,
        firstname: this.currentUser.first_name,
        lastname: this.currentUser.last_name
      }
    });
  }
  // openDialog(): void {
  //   this.dialog.open(accountComponent);
  //   this.dialog.open.openDialog();
  // }
  preDialog(): void {
    this.dialog.open(DialogPresetComponent, {
      data: {
        id: this.currentPreset.id,
        temp: this.currentPreset.temp,
        fan: this.currentPreset.fan,
        light: this.currentPreset.light
      }
    });
  }
}
