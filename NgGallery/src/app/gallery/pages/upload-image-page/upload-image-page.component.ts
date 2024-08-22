import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-image-page',
  templateUrl: './upload-image-page.component.html',
  styles: ``
})
export class UploadImagePageComponent {
  constructor(private fb: FormBuilder) { }

  form: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    description: ['', [Validators.maxLength(200)]],
    image: [null, [Validators.required]]
  });

  uploadImage() {

  }
}
