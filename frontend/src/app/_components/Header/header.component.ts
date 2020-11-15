// Author:
// Nikolaj Drejer
//
// Date: 28.10.2020
// LastEdit: 13.11.2020
// Description:
// Header component which hold the Topnav

import { Component, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
  @Input() currentUser: any;

  constructor(public dialog: MatDialog) {
  }
  // // TODO this function should be used on logout later on.
  // Logout(): void {
  //   this.dialog.open(LogoutComponent);
  // }
}
