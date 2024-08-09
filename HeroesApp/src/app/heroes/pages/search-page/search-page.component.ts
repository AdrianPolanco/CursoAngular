import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../../interfaces/hero.interface';
import { HeroesService } from '../../../services/heroes.service';
import { debounceTime, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent{

  constructor(private heroesService: HeroesService, private router: Router) { }

  heroes$?: Observable<Hero[]>
  heroes: Hero[] = [];
  searchInput: FormControl = new FormControl();

  searchHero() {
    this.heroes$ = this.heroesService.suggestions(this.searchInput.value)
      .pipe(
        debounceTime(2000)
    );
  }

  onSelected(event: MatAutocompleteSelectedEvent) {
    const value = event.option.value;

    if (!value || !value.id) return;

    this.router.navigate(['/heroes', value.id]);
  }
}
