import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  public gifs: Gif[] = [];
  private _gifsHistory: string[] = [];
  private readonly url = "https://api.giphy.com/v1/gifs";
  private apiKey = "FUOOE5XmK622EhcHXLLgdAsbBOU3tWwX";

  get gifsHistory(): string[] {
    return [...this._gifsHistory];
  }

  searchTag(tag: string): void {
    if (tag.trim().length === 0) return;

    this.organizeHistory(tag);

    const params: HttpParams = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');

    this.httpClient.get<SearchResponse>(`${this.url}/search`, { params })
      .subscribe((response: any) => {
        this.gifs = response.data;
      });
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._gifsHistory));
  }

  private loadFromLocalStorage(): void {
    const history = localStorage.getItem('history');
    if (!history) return;

    this._gifsHistory = JSON.parse(history);
    if (this._gifsHistory.length === 0) return;

    this.searchTag(this._gifsHistory[0]);
  }

  private organizeHistory(tag: string): void {
    tag = tag.trim().toLowerCase();
    //Si el tag ya existe en el historial, lo eliminamos
    if (this._gifsHistory.includes(tag)) {
    //Filtrando todos los elementos que sean iguales a tag
      this._gifsHistory = this._gifsHistory.filter((history) => history.toLowerCase() !== tag);
    }
    //Agregando el tag al principio
    this._gifsHistory.unshift(tag);
    //Tomando solo los primeros 10 elementos
    this._gifsHistory = this._gifsHistory.splice(0, 10);
    //Guardando en el local storage
    this.saveToLocalStorage();
  }


}
