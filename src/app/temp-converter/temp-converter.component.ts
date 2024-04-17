import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temp-converter.component.html',
  styleUrl: './temp-converter.component.scss'
})
export class TempConverterComponent {
  // properties
  celsius: number = 0;
  fahrenheit: number = 0;

  // methods
  celsiusToFahrenheit(): void {
    this.fahrenheit = this.celsius * (9/5) + 32;
  }

  fahrenheitToCelsius(): void {
    this.celsius = (this.fahrenheit - 32) * (5/9);
  }
}
