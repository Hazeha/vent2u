import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VentService {
  ventUrl = 'http://localhost:8080/api/vents';
  constructor(private http: HttpClient) { }

  /** GET Rooms from the server */
  getAll(roomID: any) {
    return this.http.get(this.ventUrl);
  }
}
