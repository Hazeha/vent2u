import { Component, OnInit } from '@angular/core';
import { VentService } from '../../../_services/vent.service';
import { RoomService } from '../../../_services/room.service';
import {PresetService} from '../../../_services/preset.service';


@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['../../../_styles/compView.component.css']
})
export class CheckinComponent implements OnInit {
  vents: any;
  rooms: any;
  data: any;
  currentPresets: any;
  currentRoom = null;
  currentSeat = null;
  currentVent = null;
  currentIndex = null;

  constructor(private roomService: RoomService, private ventService: VentService, private presetService: PresetService) { }


  ngOnInit(): void {
    this.getRooms();
    this.getPresets(this.presetService.currentPresetID);
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
    this.getVents();
  }

  // This will retrieve all the vents in a selected room.
  getVents() {
    this.ventService.getAll(this.currentRoom)
      .subscribe(
        data => {
          this.vents = data;
        },
        error => {
        });
  }
  setSeat(id) {
    this.currentSeat = id;
  }

  updatePreset(){
    this.data = {
      room: this.currentRoom,
      seat: this.currentSeat
    };
    this.presetService.putPresets(1, this.data)
      .subscribe(
        response => {
          this.currentPresets.seat = this.currentSeat;
          this.currentPresets.room = this.currentRoom;
        }
      );
  }
  // This is when the checkin button is pressed.
  // There should also be some update/put function.
  setActiveVent(vent, index) {
    this.currentVent = vent;
    this.currentIndex = index;
  }


  // selectedRoomID: string;
  // selectedSeatID: string;
  // chairGroup: string;
  //
  // resultRoom: [];

}
