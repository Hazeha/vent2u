import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from './class.component';
import { StudentComponent } from './student/student.component';
import { StudentsComponent } from './students/students.component';
import { MatButtonModule } from '@angular/material/button';
import { StudentsService } from './students/students.service';
import { ClaimGridModule } from '../../shared/_components/claim-grid/claim-grid.module';
import { VentService } from '../../shared/_services/vent.service';


@NgModule({
  declarations: [ClassComponent, StudentComponent, StudentsComponent ],
  imports: [
    CommonModule,
    MatButtonModule,
    ClaimGridModule
  ],
  providers: [ StudentsService, VentService ],
  exports: [ ClassComponent ]
})
export class ClassModule { }
