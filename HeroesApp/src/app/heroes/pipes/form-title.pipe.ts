import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Pipe({
  name: 'formTitle'
})
export class FormTitlePipe implements PipeTransform {

  transform(hero: Hero): string[] {
    return hero.id? ['Editar héroe', `${hero.superhero}`] : ['Crear héroe'];
  }

}
