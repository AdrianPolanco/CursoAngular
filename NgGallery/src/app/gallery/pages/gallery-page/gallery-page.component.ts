import { Component, inject, Input, OnInit} from '@angular/core';
import { Photo } from '../../types/photo.type';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from '../../services/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'gallery-page',
  templateUrl: './gallery-page.component.html',
  styles: ``,
})
export class GalleryPageComponent implements OnInit {
  @Input({ required: false }) photos?: Photo[];
  dialog = inject(MatDialog);
  snackBar = inject(MatSnackBar);

  constructor(private storageService: StorageService, private router: Router) {}
  async ngOnInit() {
    if (!this.photos) this.photos = await this.storageService.get();
  }


  async onChangeFavorite(photo: Photo) {
    await this.storageService.updateFavoriteStatus(photo.id);
    if (!photo.favorite) return;
    const snackBarRef = this.snackBar.open('Imagen agregada a favoritos', 'Ir a favoritos', { duration: 5000 })
    snackBarRef.onAction().subscribe(() => this.router.navigate(['/gallery/favorites']))
  }

  async deletePhoto(id: number) {
    await this.storageService.delete(id);
    await this.refreshPhotos();
    this.snackBar.open('Imagen eliminada correctamente', '', {duration: 5000})
  }

  async refreshPhotos() {
    this.photos = await this.storageService.get();
  }
}
