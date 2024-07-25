import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchbox.component.html',
})
export class SearchboxComponent implements OnInit, OnDestroy {
  //Un Subject es un tipo de Observable que puede ser vinculado a varios Observers
  private debouncer: Subject<string> = new Subject<string>();
  @Input() initialValue: string = '';

  @Input() placeholder: string = '';
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  //Usar ElementRef<HTMLInputElement> para acceder al input del DOM en lugar de HTMLInputElement directamente
  @ViewChild('txtInput') searchInput!: ElementRef<HTMLInputElement>;

  search(): void {
    this.onSearch.emit(this.searchInput.nativeElement.value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(1000)
    ).subscribe((value) => {
      this.onSearch.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.debouncer.unsubscribe();
  }
}
