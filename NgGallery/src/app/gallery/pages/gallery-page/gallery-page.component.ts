import { Component, inject } from '@angular/core';
import { Photo } from '../../types/photo.type';
import { Guid } from 'guid-typescript';
import { photos } from '../../data/photos.data';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../../components/details/details.component';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styles: ``,
})
export class GalleryPageComponent {

  photos: Photo[] = photos;
  dialog = inject(MatDialog);

  openDialog(photo: Photo) {
    const dialogRef = this.dialog.open(DetailsComponent, {
      data: photo
    })
  }
}
