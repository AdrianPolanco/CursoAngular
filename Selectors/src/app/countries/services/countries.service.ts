import { Injectable } from '@angular/core';
import { Region, SmallCountry } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient: HttpClient) { }

  private _regions: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Asia,
    Region.Europe,
    Region.Oceania
  ]

  get regions(): Region[] {
    //Return a copy of the regions array (with a different reference)
    return [...this._regions];
  }

  getCountriesByRegion(region: Region): SmallCountry[]{

  }

}
