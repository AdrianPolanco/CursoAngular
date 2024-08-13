import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  initialProduct = {
    name: "Nintendo Switch",
    price: 300,
    stock: 10
  }

  form: FormGroup = this.formBuilder.group({
    //fieldName: [initialValue, [validators], [asyncValidators]]
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]]
  })

  ngOnInit(): void {
    //Inicializando el form con un producto determinado (simulando que se cargó de la base de datos)
    //this.form.reset(this.initialProduct);
  }

  onSave() {
    //Si el form es invalido, marcamos todos los campos como tocados para que se disparen los Validators y se muestren los errores
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
    //Reset form
    this.form.reset({
      price: 0,
      stock: 0
    });
  }

  isValidField(field: string): boolean | null{
    //Return true if the field has an error and has been touched
    return this.form.controls[field].errors && this.form.controls[field].touched;
  }

  getFieldError(field: string) : string | null {
    if (!this.form.controls[field]) return null;

    const errors = this.form.controls[field].errors;

    if(!errors) return null;

    //Obteniendo las keys del objeto de los errores
    for (const error of Object.keys(errors)) {
       switch (error) {
         case 'required':
           return 'Este campo es requerido';

         case 'minlength':
           return `Mínimo ${errors[error].requiredLength} caracters.`;

         case 'min':
            return `El valor mínimo es ${errors[error].min}`;
       }
    }

    return null;
  }
}
