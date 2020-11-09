import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() temperature : number;
  @Input() humidity : number;
}
