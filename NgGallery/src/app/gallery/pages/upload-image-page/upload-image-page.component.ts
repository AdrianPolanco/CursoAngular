import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-upload-image-page',
  templateUrl: './upload-image-page.component.html',
  styles: ``
})
export class UploadImagePageComponent {

  constructor(private fb: FormBuilder, private storageService: StorageService, private router: Router) { }

  snackBar = inject(MatSnackBar);

  form: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    description: ['', [Validators.maxLength(200)]],
    image: [null, [Validators.required]]
  });

  onFileSelected(file: File) {
    this.form.patchValue({ image: file });
  }

  async uploadImage() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formValue = this.form.value;

    const data = {
      title: formValue.title,
      description: formValue.description,
      image: this.form.get('image')?.value
    }

    await this.storageService.save(data.title, data.description, data.image);

    this.form.reset();
    this.openSnackBar('Imagen subida correctamente');
  }

  openSnackBar(message: string) {
    const snackBarRef = this.snackBar.open(message, 'Ir a la galería', {
      duration: 10000,
    });

    snackBarRef.onAction().subscribe(() => this.router.navigate(['/gallery']))
  }
}
