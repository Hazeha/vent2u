import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-humidity',
    templateUrl: './humidity.component.html',
    styleUrls: ['./humidity.component.css']
})
export class HumidityComponent {
    @Input() humidity : number;
    @Output() humidityEvent = new EventEmitter<number>();
    onHumidityChanged(value : number) {
        this.humidityEvent.emit(value);
        console.log("Humidity Component");
    }    
}
