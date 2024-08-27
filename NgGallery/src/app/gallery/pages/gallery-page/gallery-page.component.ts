import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Photo } from '../../types/photo.type';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../../components/details/details.component';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'gallery-page',
  templateUrl: './gallery-page.component.html',
  styles: ``,
})
export class GalleryPageComponent implements OnInit {
  @Input({ required: false }) photos?: Photo[];
  @Output() onChangeFavoriteState: EventEmitter<Photo> =
    new EventEmitter<Photo>();
  dialog = inject(MatDialog);

  constructor(private storageService: StorageService) {}
  async ngOnInit() {
    if (!this.photos) this.photos = await this.storageService.get();
  }

  openDialog(photo: Photo) {
    const dialogRef = this.dialog.open(DetailsComponent, {
      data: photo,
    });
  }

  async onChangeFavorite(photo: Photo) {
    await this.storageService.updateFavoriteStatus(photo.id);
  }
}
