import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students/students.service';
import { VentService } from '../../shared/_services/vent.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
students;
vents;
  constructor(private _StudentService:StudentsService, private _VentService:VentService) { }

  ngOnInit (): void {
    this.vents = this._VentService.GetVents();
    this.students = this._StudentService.getStudents();
  }
}
