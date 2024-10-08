import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  private fb: FormBuilder = inject(FormBuilder);

  color: string = "#7b595a"
  myForm: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(6), Validators.email]],
  });

  changeColor() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    this.color = color;
  }
}
