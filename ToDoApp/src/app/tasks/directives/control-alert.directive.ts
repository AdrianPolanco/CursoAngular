import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { merge, Subscription } from 'rxjs';

@Directive({
  selector: '[taskControlAlert]'
})
export class ControlAlertDirective implements OnInit, OnDestroy{

  _fieldName?: string;
  _form?: FormGroup;
  _susbcription?: Subscription;

  @Input() set fieldName(value: string) {
    this._fieldName = value;
  }

  @Input() set form(value: FormGroup) {
    this._form = value;
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    const control = this._form?.get(this._fieldName!);
    if (!control) return;

    this._susbcription = merge(control.valueChanges, control.statusChanges).subscribe(() => this.setMessage())
  }

  private setMessage() {
    const control = this._form?.get(this._fieldName!);
    if (!control) return;

    const errors = control.errors;
    //if ((!control.touched || !control.dirty) && !control.invalid) return;

    if (!errors) {
      this.elementRef.nativeElement.innerHTML = '';
      this.elementRef.nativeElement.classList.remove('text-red-500');
      return;
    };

    const errorKeys = Object.keys(errors!)
    const message = this.getMessage(errorKeys, errors);

    this.elementRef.nativeElement.innerHTML = message;
    this.elementRef.nativeElement.classList.add('text-red-500');
  }

  private getMessage(
    errorKeys: string[],
    errors: ValidationErrors | null
  ): string {
    for (const key of errorKeys) {
      switch (key) {
        case 'required':
          return "Este campo es requerido";
        case 'minlength':
          return `La cantidad mínima de caracteres permitidos es ${
            errors![key].requiredLength
          }. Actualmente tienes ${errors![key].actualLength}`;
        case 'maxlength':
          return `La cantidad máxima de caracteres permitidos es ${
            errors![key].requiredLength
          }. Actualmente tienes ${errors![key].actualLength}`;
        case 'pastDate':
          return 'La fecha seleccionada debe estar en el futuro.';
        default:
          return '';
      }
    }
    return '';
  }

  ngOnDestroy(): void {
    this._susbcription?.unsubscribe();
  }
}
