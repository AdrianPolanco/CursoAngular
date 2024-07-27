import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-custom-page',
  templateUrl: './custom-page.component.html',
  styles: ``
})
export class CustomPageComponent {
  isUpperCase: boolean = false;
  sortHeroesBy?: keyof Hero;

  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red
    },
    {
      name: "Green Lantern",
      canFly: true,
      color: Color.green
    }
  ]

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }

  changeSort(sortBy: keyof Hero) {
    this.sortHeroesBy = sortBy;
  }
}
