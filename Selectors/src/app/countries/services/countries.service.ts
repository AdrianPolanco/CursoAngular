import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';
import { combineLatest, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private httpClient: HttpClient) {}

  private _regions: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Asia,
    Region.Europe,
    Region.Oceania,
  ];
  private _baseUrl: string = 'https://restcountries.com/v3.1';

  get regions(): Region[] {
    //Return a copy of the regions array (with a different reference)
    return [...this._regions];
  }

  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    if (!region) return of([]);
    const normalizedRegion = region.toLowerCase();
    return this.httpClient
      .get<Country[]>(
        `${this._baseUrl}/region/${normalizedRegion}?fields=cca3,name,borders`
      )
      .pipe(
        //IMPORTANT: map is used to transform the value emited by the observable
        map((countries) => {
          return countries.map((country) => {
            return {
              cca3: country.cca3,
              name: country.name.common,
              borders: country.borders || [],
            };
          });
        })
      );
  }

  getCountryByAlphaCode(alphaCode: string): Observable<SmallCountry> {
    const url = `${this._baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`;
    return this.httpClient.get<Country>(url).pipe(
      map((country) => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? [],
      }))
    );
  }


  getCountryBordersByCodes(borders: string[]): Observable<SmallCountry[]> {
    if (!borders || borders.length === 0) return of([]);

    //Array de observables
    const countriesRequests: Observable<SmallCountry>[] = [];

    borders.forEach((code) => {
      //Por cada código de país, se hace una petición al servicio getCountryByAlphaCode
      const request = this.getCountryByAlphaCode(code);
      countriesRequests.push(request);
    });

    //Se combina el array de observables en un solo observable, el cual, al ser disparado con suscribe realiza todas las peticiones en paralelo, y cuando se haya emitido al menos un valor por cada item, emite un array con los resultados de las peticiones
    return combineLatest(countriesRequests);
  }
}
