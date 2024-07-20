import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text" class="form-control" placeholder="Buscar gifs..." #search (keyup.enter)="searchTag()"/>
  `,
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  constructor(private gifsService: GifsService) { }

  //ViewChild sirve para tomar una referencia local de un elemento del DOM (una vez que se renderiza el componente)
  @ViewChild('search') search!: ElementRef<HTMLInputElement>;
  searchTag(): void {
    const value: string = this.search.nativeElement.value;
    this.gifsService.searchTag(value);
    this.search.nativeElement.value = '';
  }
}
