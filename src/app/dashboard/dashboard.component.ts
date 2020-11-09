import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  public componentAdded(component) {
    if(component != undefined) {
      if(component.temperatureEvent) {
      component.temperature = this.temperature;
      component.temperatureEvent.subscribe(
        (data) => {
          this.temperature = data;
        })
      }
      else if(component.humidityEvent) {
        component.humidity = this.humidity;
        component.humidityEvent.subscribe(
          (data) => {
            this.humidity = data;
          }
        )
      }
    }
  }
  temperature = 0;
  humidity = 0;
  
  ngInit() {
    this.temperature = 17;
    this.humidity = 53;
  }
}