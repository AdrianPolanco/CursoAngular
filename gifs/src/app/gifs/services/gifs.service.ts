import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  constructor() { }

  private _gifsHistory: string[] = [];

  get gifsHistory(): string[] {
    return [...this._gifsHistory];
  }

  searchTag(tag: string): void {
    if(tag.trim().length === 0) return;
    this.organizeHistory(tag);
   // this._gifsHistory = this._gifsHistory.splice(0, 10);
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
  }


}
