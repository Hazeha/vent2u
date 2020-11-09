import { Component } from '@angular/core';
import { WeatherService } from '../../../shared/_services/Weather/weather.service';

@Component({
    selector: 'outside-humidity',
    template: `
    <div class="outside-humidity">
        <span *ngIf="isLoading">Getting data...</span>
        <span *ngIf="!isLoading">Outside {{ humidity }}%</span>
    </div>`,
    styleUrls: ['./ohumidity.component.css'],
    providers: [WeatherService]
})
export class OHumidityComponent {
    humidity = 0;
    isLoading = true;
    constructor(private _otempService: WeatherService) {
    }
    ngOnInit() {
        this._otempService.getWeatherData()
        .subscribe(data => {
            this.isLoading = false;
            let weather = data;
            this.humidity = weather['main'].humidity;
        });
    }
}
