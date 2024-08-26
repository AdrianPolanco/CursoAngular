import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Photo } from '../../types/photo.type';
import { Guid } from 'guid-typescript';
import { photos } from '../../data/photos.data';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../../components/details/details.component';

@Component({
  selector: 'gallery-page',
  templateUrl: './gallery-page.component.html',
  styles: ``,
})
export class GalleryPageComponent {

  @Input({ required: false }) photos: Photo[] = photos;
  @Output() onChangeFavoriteState: EventEmitter<Photo> = new EventEmitter();
  dialog = inject(MatDialog);

  openDialog(photo: Photo) {
    const dialogRef = this.dialog.open(DetailsComponent, {
      data: photo
    })
  }

  onChangeFavorite(photo: Photo) {
    this.onChangeFavoriteState.emit(photo);
  }
}