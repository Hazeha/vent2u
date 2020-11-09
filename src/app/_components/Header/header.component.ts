// Author:
// Nikolaj Drejer
//
// Date: 28.10.2020
//
// Desription:
// Header component which hold the Topnav and the burger menu

import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from './logout/logout.component';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
  user = 'Wall Trumper';

  @Input() temperature : number;
  @Input() humidity : number;

  constructor(public dialog: MatDialog) {
  }

  Logout(): void {
    this.dialog.open(LogoutComponent);
  }
}
