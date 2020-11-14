import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/preset';
@Injectable({
  providedIn: 'root'
})
export class PresetService {
  temp: number;
  fan: number;
  light: number;
  lights: number;
  lightsText: string;


  constructor(private http: HttpClient) { }
  createPreset(data) {
    return this.http.post(baseUrl, data);
  }
  getPresets(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }
  updatePreset(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  deletePreset(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
