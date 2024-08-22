import { Component } from '@angular/core';
import { Photo } from '../../types/photo.type';
import { photos } from '../../data/photos.data';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styles: ``
})
export class FavoritesPageComponent {

  photos: Photo[] = photos.filter(photo => photo.favorite);

  onChangeFavoriteState(photo: Photo) {
    if (photo.favorite) {
      this.photos.push(photo);
      return;
    }

    this.photos = this.photos.filter(p => p.id !== photo.id);
  }
}
