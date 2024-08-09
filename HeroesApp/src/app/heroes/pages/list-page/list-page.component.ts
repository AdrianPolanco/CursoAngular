import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Hero } from '../../../interfaces/hero.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``,
})
export class ListPageComponent implements OnInit {
  constructor(private heroesService: HeroesService) {}

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.heroesService.get()
      .subscribe(heroes => this.heroes = heroes);
  }
}
