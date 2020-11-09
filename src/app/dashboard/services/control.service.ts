import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  humidity: number;
  temperature: number;
  lights: number;
  lightsText: string;
}
