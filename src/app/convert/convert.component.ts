import { Component } from '@angular/core';
import { DistanceConverterComponent } from '../distance-converter/distance-converter.component';
import { TempConverterComponent } from '../temp-converter/temp-converter.component';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [DistanceConverterComponent, TempConverterComponent],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})
export class ConvertComponent {

}
