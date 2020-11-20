import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Presets } from '../_interface/preset';

@Injectable({
  providedIn: 'root'
})
export class PresetService {
  presetUrl = 'http://localhost:8080/api/preset_specific';
  presetPutUrl = 'http://localhost:8080/api/preset';
  currentPresetID: any;
  seat: 2;
  room: 1;
  constructor(private http: HttpClient) { }
  /** GET heroes from the server */
  getPresets(id: number): Observable<Presets[]> {
    this.currentPresetID = {id};
    return this.http.get<Presets[]>(`${this.presetUrl}/${id}`);
  }
  putPresets(id, data): Observable<any> {
    return this.http.put(`${this.presetPutUrl}/${id}`, data);
  }

  // createPreset(data) {
  //   return this.http.post(presetUrl, data);
  // }
  // getPresets(id) {
  //   return this.http.get(`${presetUrl}/${id}`);
  // }
  // updatePreset(id, data) {
  //   return this.http.put(`${presetUrl}/${id}`, data);
  // }
  // deletePreset(id) {
  //   return this.http.delete(`${presetUrl}/${id}`);
  // }
}
