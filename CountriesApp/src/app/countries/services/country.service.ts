import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl: string = 'https://restcountries.com/v3.1/';
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  }

  private getCountriesRequest(url: string): Observable<Country[]> {

    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        delay(1000)
      //Retrasa la respuesta del observable en 1 segundo, incluso si la respuesta es inmediata.
      )
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}capital/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStore.byCapital = { term, countries })
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}name/${term}`;
    return this.getCountriesRequest(url);
  }

  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}region/${term}`;
    return this.getCountriesRequest(url);
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}alpha/${code}`;
    return this.httpClient.get<Country[]>(url).pipe(
      //IMPORTANT: map() es una función que se encarga de transformar los datos que fluyen a través de un observable.
      map(res => res.length > 0 ? res[0] : null),
      catchError(err => of(null))
    )
  }
}
