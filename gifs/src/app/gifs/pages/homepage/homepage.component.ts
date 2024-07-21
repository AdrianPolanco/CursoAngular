import { Component } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-homepage',
  templateUrl: './homepage.component.html'
})
export class HomePageComponent {
  constructor(private gifService: GifService) { }

  get gifs(): Gif[] {
    return this.gifService.gifs;
  }
}
