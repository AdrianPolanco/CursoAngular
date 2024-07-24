import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  constructor(private countryService: CountryService) { }

  countries: Country[] = [];

  search(term: string): void {
    this.countryService.searchCapital(term).subscribe(
      countries => this.countries = countries
    )
  }
}
