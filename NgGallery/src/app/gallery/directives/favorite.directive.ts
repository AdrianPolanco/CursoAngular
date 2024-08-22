import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Photo } from '../types/photo.type';

@Directive({
  selector: '[isFavorite]'
})
export class FavoriteDirective {

  private _photo?: Photo;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @Input() set photo(value: Photo) {
    this._photo = structuredClone(value);
    this.setFavorite()
  }

  private setFavorite() {
    if (!this._photo) return;

    const iconName = this._photo.favorite ? 'favorite': 'favorite_outline';
    this.renderer.setProperty(this.el.nativeElement, 'textContent', iconName);
  }
}
