import { Component, Input } from '@angular/core';
import { Hero } from '../../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent {
  @Input() hero!: Hero;
}
