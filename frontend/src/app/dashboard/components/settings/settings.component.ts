import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['../../../_styles/compView.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }
  shadowToggle = false;
  ngOnInit(): void {
  }

}
