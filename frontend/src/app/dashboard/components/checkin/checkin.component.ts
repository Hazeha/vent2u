import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SeatService } from '../../../_services/seat.service';
import { RoomService } from '../../../_services/room.service';
import {PresetService} from '../../../_services/preset.service';
import { LoginModalComponent } from "./modal/model.component";

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['../../../_styles/compView.component.css']
})
export class CheckinComponent implements OnInit {
  vents: any;
  rooms: any;
  currentPresets: any;
  currentRoom = null;
  currentVent = null;
  currentIndex = null;
  private seatData: any;

  constructor(private roomService: RoomService, private seatService: SeatService, private presetService: PresetService, public dialog: MatDialog) { }


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
    console.log(this.currentRoom, 'set as current room');
    this.getSeats();


  }

  setVent(id) {
    this.currentVent = id;
    console.log(this.currentVent, 'set as current seat');
  }
  getSeats() {
    this.seatService.getAll(this.currentRoom)
      .subscribe(
        data => {
          this.vents = data;
        },
        error => {
        });
  }
  setSeat(id) {
    this.currentVent = id;
    console.log(this.currentVent, 'set as current seat');

  }

  updatePreset(){
    const data = {
      room: this.currentRoom,
      seat: this.currentVent
    };
    this.presetService.putPresets(this.currentPresets.id, data)
      .subscribe(
        response => {
          this.currentPresets.seat = this.currentVent;
          this.currentPresets.room = this.currentRoom;
        }
      );
    console.log('Seat and Room Selected');
    this.openDialog();
    // this.updateSeat();
  }
  openDialog() {
    this.dialog.open(LoginModalComponent);
  }
  // updateSeat(){
  //   const data = {
  //     user_id: this.currentPresets.user_id
  //   };
  //   this.ventService.putSeat(this.currentSeat, data).subscribe( response => {
  //     this.vents.user_id = this.currentSeat;
  //   });
  // }
  // This is when the checkin button is pressed.
  // There should also be some update/put function.


  // selectedRoomID: string;
  // selectedSeatID: string;
  // chairGroup: string;
  //
  // resultRoom: [];

}
