import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country, Region } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  constructor(private countryService: CountryService) { }

  regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  countries: Country[] = [];
  selectedRegion?: Region;

  search(term: Region): void {
    this.selectedRegion = term;
    this.countryService.searchRegion(term).subscribe(
      countries => this.countries = countries
    )
  }
}
