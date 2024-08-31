import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateDate(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const date = new Date(control.value);
    const now = new Date();
    if(date <= now){
      return { pastDate: true };
    }
    return null;
  }
}
