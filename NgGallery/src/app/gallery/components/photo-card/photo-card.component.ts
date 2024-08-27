import { Component, EventEmitter, inject, Input, output, Output} from '@angular/core';
import { Photo } from '../../types/photo.type';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'gallery-photo-card',
  templateUrl: './photo-card.component.html',
  styles: ``,
})
export class PhotoCardComponent {
  @Input() photo!: Photo;
  @Output() onChangeFavoriteState: EventEmitter<Photo> =
    new EventEmitter<Photo>();
  onPhotoDeleted = output<number>();
  alertRef = inject(MatDialog);
  dialog = inject(MatDialog);

  openDialog(photo: Photo) {
    this.dialog.open(DetailsComponent, {
      data: photo,
    });
  }

  toggleFavorite() {
    this.photo.favorite = !this.photo.favorite;
    this.onChangeFavoriteState.emit(this.photo);
  }

  openDeleteDialog() {
    const dialog = this.alertRef.open(DeleteDialogComponent, {
      data: this.photo,
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) this.onPhotoDeleted.emit(this.photo.id);
    });
  }
}
