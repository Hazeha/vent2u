import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:8080/api/user';
  constructor(private http: HttpClient) { }

  getUser(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  putUser(id, data): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
}
