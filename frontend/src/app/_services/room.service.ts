import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Presets} from '../_interface/preset';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  roomUrl = 'http://localhost:8080/api/rooms';
  constructor(private http: HttpClient) { }

  /** GET Rooms from the server */
  getAll() {
    return this.http.get(this.roomUrl);
  }
}