import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-distance-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './distance-converter.component.html',
  styleUrl: './distance-converter.component.scss'
})
export class DistanceConverterComponent {
  // properties
  meter: number = 0;
  feet: number = 0;

  // methods
  meterToFeet(): void {
    this.feet = this.meter * 3.2808;
  }

  feetToMeter(): void {
    this.meter = this.feet / 3.2808;
  }
}
