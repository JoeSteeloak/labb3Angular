import { Component } from '@angular/core';
import { DistanceConverterComponent } from '../distance-converter/distance-converter.component';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [DistanceConverterComponent],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})
export class ConvertComponent {

}
