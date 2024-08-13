import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}

  firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  cantBeStrider(control: FormControl): ValidationErrors | null {
    const value = control.value?.trim().toLowerCase();
    const invalid = value === 'strider';
    if (invalid) return { noStrider: invalid };
    return null;
  };

  isValidField(form: FormGroup, field: string): boolean | null {
    return form.controls[field].errors && form.controls[field].touched;
  }

  arePasswordEquals(pass1: string, pass2: string) {
    //IMPORTANTE: Obtenemos el acceso al FormGroup a traves de la función que retornamos
    return (formGroup: FormGroup): ValidationErrors | null => {

      const password = formGroup.controls[pass1]?.value;
      const confirmPassword = formGroup.controls[pass2]?.value;

      if (password !== confirmPassword) {
        formGroup.controls[pass2].setErrors({ noEquals: true });
        return { noEquals: true };
      }

      formGroup.get(pass2)?.setErrors(null);
      return null;
    }
  }
}
