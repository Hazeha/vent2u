import { Component, OnInit } from '@angular/core';
import { PresetService } from '../_services/preset.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  constructor(private userService: UserService, private presetService: PresetService) {
  }
  private message: string;
  currentUser = null;
  currentPreset: any;

  // This is for testing
  testUserId = 1;

  // This is for user loading
  getUser(id) {
    this.userService.getUser(id)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // This is for preset loading
  getPresets(id){
    this.presetService.getPresets(id).subscribe(data => {
        this.currentPreset = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.getPresets(this.testUserId);
    this.message = '';
    this.getUser(this.testUserId);
  }
}
