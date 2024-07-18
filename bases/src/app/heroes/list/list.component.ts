import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  heroes = ['Ironman', 'Thor', 'Hulk', 'Captain America', 'Black Widow'];

  removeLastHero(): void {
    this.heroes.pop();
  }
}
