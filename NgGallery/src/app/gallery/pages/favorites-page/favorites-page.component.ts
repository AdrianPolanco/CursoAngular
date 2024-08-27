import { Component, inject, OnInit } from '@angular/core';
import { Photo } from '../../types/photo.type';
import { StorageService } from '../../services/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'gallery-favorites-page',
  templateUrl: './favorites-page.component.html',
  styles: ``,
})
export class FavoritesPageComponent implements OnInit {
  constructor(private storageService: StorageService, private router: Router) {}

  photos?: Photo[];
  dialog = inject(MatDialog);
  snackBar = inject(MatSnackBar);

  async ngOnInit() {
    this.photos = await this.storageService.get();
    this.photos = this.photos.filter((photo) => photo.favorite);
  }

  async onChangeFavorite(photo: Photo) {
    await this.storageService.updateFavoriteStatus(photo.id);
    await this.refreshPhotos();
    if (photo.favorite) return;
    this.snackBar.open(
      'Imagen eliminada de favoritos',
      '',
      { duration: 5000 }
    );
  }

  async deletePhoto(id: number) {
    await this.storageService.delete(id);
    await this.refreshPhotos();
    this.snackBar.open('Imagen eliminada correctamente', '', {
      duration: 5000,
    });
  }

  async refreshPhotos() {
    const likedPhotos = await this.storageService.get();
    this.photos = likedPhotos.filter((photo) => photo.favorite);
  }
}
