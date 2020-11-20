import {Component, Inject, Input, OnInit} from '@angular/core';
import {PresetService} from '../../../../_services/preset.service';
import {CheckinComponent} from '../checkin.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-login-modal',
  templateUrl: './model.component.html'
})
export class LoginModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  // currentRoom = this.checkinComponent.currentRoom;
  // currentSeat = this.checkinComponent.currentSeat;
  ngOnInit(): void {
    console.log(this.data);
  }

}
