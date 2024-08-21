import { Component, inject, Input } from '@angular/core';
import { Photo } from '../../types/photo.type';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: ``
})
export class DetailsComponent {
  photo: Photo = inject<Photo>(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<DetailsComponent>);


  closeDialog() {
    this.dialogRef.close();
  }
}
