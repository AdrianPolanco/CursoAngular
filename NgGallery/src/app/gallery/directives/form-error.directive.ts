import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { ErrorMessages } from '../types/enums/error-messages.enum';

@Directive({
  selector: '[galleryFormError]',
})
export class FormErrorDirective implements OnChanges{
  private _form?: FormGroup;
  private _key?: string;
  private _valid?: boolean;

  @Input() set form(form: FormGroup) {
    this._form = form;
    this.setMessages();
  }

  @Input() set key(value: string) {
    this._key = value;
  }

  constructor(private elementRef: ElementRef) { }

  ngOnChanges(): void {

  }

  setMessages() {
    if (!this._form || !this._key) return;

    const errors = this._form.controls[this._key].errors;
    const errorKeys = Object.keys(errors!);
    const message = this.getMessage(errorKeys, errors);
    if (this._form.touched) {
      this.elementRef.nativeElement.innerText = message;
      this.elementRef.nativeElement.style.color = this._valid ? 'green' : 'red';
    }

  }

  private getMessage(errorKeys: string[], errors: ValidationErrors | null) {
    return errorKeys.map((key) => {
      switch (key) {
        case 'required':
          this._valid = false;
          return ErrorMessages.Required;
        case 'minlength':
          this._valid = false;
          return `${ErrorMessages.InvalidLength}. La cantidad mínima de caracteres permitidos es ${errors![key].requiredLength}. Actualmente tienes ${errors![key].actualLength}`;
        case 'maxlength':
          this._valid = false;
          return `${ErrorMessages.InvalidLength}. La cantidad máxima de caracteres permitidos es ${errors![key].requiredLength}. Actualmente tienes ${errors![key].actualLength}`;
        default:
          this._valid = true;
          return 'Este campo es válido';
      }
    });
  }
}
