import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  constructor(private countryService: CountryService) { }

  regions: Country[] = [];

  search(term: string): void {
    this.countryService.searchRegion(term).subscribe(
      regions => this.regions = regions
    )
  }
}
