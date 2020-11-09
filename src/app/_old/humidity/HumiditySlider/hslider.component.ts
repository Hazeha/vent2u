import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'hum-slider',
    templateUrl: './hslider.component.html',
    styleUrls: ['./hslider.component.css']
})
export class HumiditySlider {
    @Input() humidity : number;
    @Output() humidityEvent = new EventEmitter<number>();

    onHumidityChanged(value : number) {
        this.humidityEvent.emit(value);
        console.log("Slider Component")
    }
}
