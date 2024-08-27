import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Photo } from '../../types/photo.type';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent {
  photo = inject<Photo>(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<DeleteDialogComponent>);

  closeDialog() {
    this.dialogRef.close();
  }
}
