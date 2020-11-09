import { Component, OnInit } from '@angular/core';
import { VentService } from 'src/app/shared/_services/vent.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  constructor(private _VentService: VentService) { }

  vents;

  ngOnInit(): void {
    this.vents = this._VentService.GetVents();
  }

}
