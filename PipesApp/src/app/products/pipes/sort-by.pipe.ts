import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: Hero[], sortBy?: keyof Hero | null): Hero[] {
    switch (sortBy) {
      case "name":
        return value.sort((a, b) => (a.name > b.name) ? 1 : -1);
      case "canFly":
        return value.sort((a, b) => (a.canFly > b.canFly) ? 1 : -1);
      case "color":
        return value.sort((a, b) => (a.color > b.color) ? 1 : -1);
      default:
        return value;
    }
  }
}
