import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchbox.component.html'
})
export class SearchboxComponent {
  @Input() placeholder: string = '';
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  //Usar ElementRef<HTMLInputElement> para acceder al input del DOM en lugar de HTMLInputElement directamente
  @ViewChild("txtInput") searchInput!: ElementRef<HTMLInputElement>;

  search(): void {
    this.onSearch.emit(this.searchInput.nativeElement.value);
  }
}
