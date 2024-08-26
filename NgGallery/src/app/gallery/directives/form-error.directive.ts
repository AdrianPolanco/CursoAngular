import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ErrorMessages } from '../types/enums/error-messages.enum';
import { merge, Subscription } from 'rxjs';

@Directive({
  selector: '[galleryFormError]',
})
export class FormErrorDirective implements OnInit, OnChanges, OnDestroy {
  @Input() form!: FormGroup;
  @Input() fieldKey!: string;
  @Input() isFileInput: boolean = false;

  private subscription?: Subscription;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const control = this.form.get(this.fieldKey);
    if (control) {
      if (this.isFileInput) {
        control.setValidators([Validators.required, this.validateFileType]);
      }
      this.subscription = merge(
        control.valueChanges,
        control.statusChanges
      ).subscribe(() => {
        this.setMessages();
      });
    }
  }

  ngOnChanges(): void {
    this.setMessages();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  setMessages() {
    if (!this.form || !this.fieldKey) return;

    const control = this.form.get(this.fieldKey);
    if (!control) return;

    if ((control.dirty || control.touched) && control.invalid) {
      const errors = control.errors;
      const message = this.getMessage(Object.keys(errors!), errors);
      this.elementRef.nativeElement.innerText = message;
      this.elementRef.nativeElement.style.color = 'red';
    } else if (control.valid) {
      this.elementRef.nativeElement.innerText = 'Este campo es válido';
      this.elementRef.nativeElement.style.color = 'green';
    } else {
      this.elementRef.nativeElement.innerText = '';
    }
  }

  private getMessage(
    errorKeys: string[],
    errors: ValidationErrors | null
  ): string {
    for (const key of errorKeys) {
      switch (key) {
        case 'required':
          return ErrorMessages.Required;
        case 'minlength':
          return `${
            ErrorMessages.InvalidLength
          }. La cantidad mínima de caracteres permitidos es ${
            errors![key].requiredLength
          }. Actualmente tienes ${errors![key].actualLength}`;
        case 'maxlength':
          return `${
            ErrorMessages.InvalidLength
          }. La cantidad máxima de caracteres permitidos es ${
            errors![key].requiredLength
          }. Actualmente tienes ${errors![key].actualLength}`;
        case 'invalidImageFile':
          return 'El archivo seleccionado no es una imagen válida';
        default:
          return 'Error de validación';
      }
    }
    return '';
  }

  private validateFileType(
    control: AbstractControl
  ): ValidationErrors | null {
    if (control.value) {
      const file: string = control.value;
      const fileArray = file.split('.');
      const extension = fileArray[fileArray.length - 1];
      if (file && extension) {
        const allowedTypes = ['jpeg', 'png', 'gif', 'jpg'];
        if (!allowedTypes.includes(extension)) {
          return { invalidImageFile: true };
        }
      }
    }
    return null;
  }
}
