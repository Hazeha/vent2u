import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  seatUrl = 'http://localhost:8080/api/seat';
  constructor(private http: HttpClient) { }

  /** GET Rooms from the server */

  getAll(room) {
    return this.http.get(`${this.seatUrl}/${room}`, room);
  }

  putSeat(id, data): Observable<any> {
    return this.http.put(`${this.seatUrl}/${id}`, data);
  }
}
