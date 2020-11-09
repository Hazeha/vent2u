import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
public getStudents() {
  return [{Id: 1, name: "Olaf Sørensen", claimedVent:{Id: 1, name: "G1 V1"}},
  {Id: 1, name: "Olaf Sørensen", claimedVent:{Id: 1, name: "G1 V1"} }]
}
  constructor() { }
}

