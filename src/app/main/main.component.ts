import { Component } from '@angular/core'

@Component({
    selector: '<dashboard-main>',
    template: `
        <!-- Temperature Counter -->
        <input class="temperature-counter" type="number" value="22" />
        <!-- Outside/Inside Temperature -->
        <div class="outside-inside-temp">
            <div class="outside-temp">
                Outside 4&#176;C
            </div>
            <div class="inside-temp">
                Inside 4&#176;C
            </div>
        </div>
        <!-- Presets -->
        <div class="presets">
            <div class="presets-menu">
                <button mat-button [matMenuTriggerFor]="presets">Presets</button>
                <mat-menu #presets="matMenu">
                    <button mat-menu-item>
                        <mat-icon>dialpad</mat-icon>
                        <span>Item 1</span>
                    </button>
                    <button mat-menu-item disabled>
                        <mat-icon>voicemail</mat-icon>
                        <span>Iitem 2</span>
                    </button>
                    <button mat-menu-item>
                        <mat-icon>notifications_off</mat-icon>
                        <span>Item 3</span>
                    </button>
                </mat-menu>
            </div>
            <button mat-button>Save</button>
        </div>
    `,

    styleUrls: ['./main.component.css'],
    providers: []    
})
export class DashboardMain{
} 
