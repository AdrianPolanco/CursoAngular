import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/services/validator.service';
import { EmailValidatorService } from '../../../shared/services/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {
  constructor(private fb: FormBuilder, private validatorService: ValidatorService, private emailValidatorService: EmailValidatorService) { }

  myForm: FormGroup = this.fb.group({
    //Validadores a nivel de control
    name: ["", [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    email: ["", [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidatorService]],
    username: ["", [Validators.required, this.validatorService.cantBeStrider]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    password2: ["", [Validators.required]]
  }, {
    //Validadores a nivel de FormGroup, dentro de la funcion se puede acceder al FormGroup a traves de la función que retornamos
    validators: [this.validatorService.arePasswordEquals('password', 'password2')]
  })

  isValidField(field: string){
    //TODO: Obtener validacion desde un servicio
    return this.validatorService.isValidField(this.myForm, field);
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
  }
}
