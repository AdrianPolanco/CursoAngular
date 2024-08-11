import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Hero[]> {
      return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getById(id: string): Observable<Hero|undefined> {
    return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`)
              .pipe(catchError(err => of(undefined)));
  }

  suggestions(term: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes?q=${term}&_limit=6`);
  }

  add(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  update(hero: Hero): Observable<Hero> {
    if(!hero.id) throw new Error('Hero id is required');
    return this.httpClient.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  delete(id: string): Observable<boolean>{
    return this.httpClient.delete<boolean>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        map(resp => true),
        catchError(err => of(false))
    );
  }
}
