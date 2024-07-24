import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl: string = 'https://restcountries.com/v3.1/';

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}capital/${term}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
      //Pipe en RxJs es una función que se encarga de transformar los datos que fluyen a través de un observable.
      //of() es una función que crea un observable a partir de un valor recibido
        //Estamos capturando el error cuando el response es un 404
      catchError(err => of([]))
    )
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}name/${term}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(err => of([]))
      )
  }

  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}region/${term}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(err => of([]))
      )
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
