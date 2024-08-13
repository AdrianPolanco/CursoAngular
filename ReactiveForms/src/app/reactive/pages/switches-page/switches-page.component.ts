import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent {
  constructor(private formBuilder: FormBuilder) { }

  myForm = this.formBuilder.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, Validators.requiredTrue]
  });

  get termsInvalid() {
    return this.myForm.get('terms')?.invalid && this.myForm.get('terms')?.touched;
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    alert('Formulario guardado');
  }
}
