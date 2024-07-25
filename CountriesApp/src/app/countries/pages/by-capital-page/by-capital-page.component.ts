import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent implements OnInit {
  constructor(private countryService: CountryService) { }

  public isLoading: boolean = false;
  countries: Country[] = [];
  initialValue: string = '';

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries
    this.initialValue = this.countryService.cacheStore.byCapital.term
  }

  search(term: string): void {
    this.isLoading = true;

    this.countryService
      .searchCapital(term)
      .subscribe((countries) => {
        this.countries = countries
        this.isLoading = false;
      });
  }
}
