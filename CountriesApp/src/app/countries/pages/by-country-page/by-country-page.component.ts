import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  constructor(private countryService: CountryService) { }

  countries: Country[] = [];

  search(term: string): void {
    this.countryService.searchCountry(term).subscribe(
      countries => this.countries = countries
    )
  }
}
