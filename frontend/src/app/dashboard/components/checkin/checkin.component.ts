import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SeatService } from '../../../_services/seat.service';
import { RoomService } from '../../../_services/room.service';
import {PresetService} from '../../../_services/preset.service';
import { LoginModalComponent } from './modal/model.component';

export interface DialogData {
}
@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['../../../_styles/compView.component.css']
})
export class CheckinComponent implements OnInit {
  seats: any;
  rooms: any;
  currentPresets: any;
  currentRoom = null;
  currentSeat = null;

  constructor(private roomService: RoomService,
              private seatService: SeatService,
              private presetService: PresetService,
              public dialog: MatDialog) { }


  ngOnInit(): void {
    this.getRooms();
    this.getPresets(1);
  }
  getPresets(id): void {
    this.presetService.getPresets(id)
      .subscribe(presetData => (this.currentPresets = presetData));
  }
  getRooms(){
    this.roomService.getAll()
      .subscribe(
        data => {
          this.rooms = data;
        },
        error => {
        });
  }
  setRoom(id) {
    this.currentRoom = id;
    this.getSeats();


  }

  getSeats() {
    this.seatService.getAll(this.currentRoom)
      .subscribe(
        data => {
          this.seats = data;
        },
        error => {
        });
  }
  setSeat(id) {
    this.currentSeat = id;

  }

  updatePreset(){
    const data = {
      room: this.currentRoom,
      seat: this.currentSeat
    };
    this.presetService.putPresets(this.currentPresets.id, data)
      .subscribe(
        response => {
          this.currentPresets.seat = this.currentSeat;
          this.currentPresets.room = this.currentRoom;
        }
      );
    this.openDialog();
    this.updateSeat();
  }
  openDialog() {
    this.dialog.open(LoginModalComponent, {
      data: {
        selectedSeat: this.currentSeat,
        selectedRoom: this.currentRoom
      }
    });
  }
  updateSeat(){
    const data = {
      user_id: this.currentPresets.user_id
    };
    this.seatService.putSeat(this.currentSeat, data).subscribe( response => {
      this.seats.user_id = this.currentSeat;
    });
  }
}
