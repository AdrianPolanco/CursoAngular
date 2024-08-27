import { Component, inject, OnInit } from '@angular/core';
import { Photo } from '../../types/photo.type';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'gallery-favorites-page',
  templateUrl: './favorites-page.component.html',
  styles: ``,
})
export class FavoritesPageComponent implements OnInit {
  constructor(private storageService: StorageService) {}

  photos?: Photo[];

  async ngOnInit() {
    this.photos = await this.storageService.get();
    this.photos = this.photos.filter((photo) => photo.favorite);
  }

  async onChangeFavoriteState(photo: Photo) {
    console.log('Event received in GalleryPageComponent:', photo);
    //this.photos = await this.storageService.updateFavoriteStatus(photo.id);
  }
}
