import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['../../../_styles/compView.component.css']
})
export class CheckinComponent implements OnInit {
  selectedRoomID: string;
  selectedSeatID: string;
  chairGroup: string;

  rooms: [1, 2, 3, 4];
  resultRoom: [];
  constructor() { }


  ngOnInit(): void {
  }

}
