import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private _color: string = "#7b595a";
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set validationErrors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessages();
  }
  constructor(private el: ElementRef<HTMLElement>) { }
  ngOnInit(): void {

  }

  setStyle() {
    this.el.nativeElement.style.color = this._color;
  }

  setErrorMessages() {
    if(!this._errors) {
      this.el.nativeElement.innerText = 'No hay errores';
      this.el.nativeElement.style.color = 'green';
      return;
    }

    const keys = Object.keys(this._errors);

    if (this._errors["required"]) {
      this.el.nativeElement.innerText = 'Este campo es requerido';
      this.el.nativeElement.style.color = 'red';
      return;
    }

    if (keys.includes("minlength")) {
      const actualLength: number = this._errors["minlength"].actualLength;
      const requiredLength: number = this._errors["minlength"].requiredLength;
      const remainingLength: number = requiredLength - actualLength;

      this.el.nativeElement.innerText = `El campo debe tener al menos ${requiredLength} caracteres. Te faltan ${remainingLength} caracteres`;
      this.el.nativeElement.style.color = 'red';
      return;
    }

    if (keys.includes("email")) {
      this.el.nativeElement.innerText = 'El email no es válido';
      this.el.nativeElement.style.color = 'red';
      return;
    }
  }
}
