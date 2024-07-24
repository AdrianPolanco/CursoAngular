import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-table',
  templateUrl: './countrytable.component.html'
})
export class CountrytableComponent {
  @Input() countries: Country[] = [];
}
