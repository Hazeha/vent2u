import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) { }
  getWeatherData() {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=Roskilde&appid=56dac58d0d01693e552468ef3b27c1d1";
    return this.http.get(url);
  }
}