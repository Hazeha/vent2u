import { Component, OnInit } from '@angular/core';
import { PresetService } from '../_services/preset.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private userService: UserService, private presetService: PresetService) {
  }
  private message: string;
  currentUser = null;
  currentPreset: any = {
    createdAt: '2020-11-20T08:55:05.000Z',
    fan: 100,
    id: 1,
    light: 1,
    seat: 1,
    temp: 1,
    updatedAt: '2020-11-20T08:55:05.000Z',
    user_id: 1
  };

  // This is for testing
  testUserId = 1;

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

  ngOnInit(): void {
    this.getPresets(this.testUserId);
    this.message = '';
    this.getUser(this.testUserId);
  }
}
