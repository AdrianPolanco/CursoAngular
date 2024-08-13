import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  constructor() { }
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
      const email = control.value;

      const httpCallObservable = new Observable<ValidationErrors | null>(
        (subscriber) => {
          console.log({ email });

          if (email === 'fernando@google.com') {
            //Se emite un valor para indicar que el email ya esta tomado
            subscriber.next({ emailTaken: true });
            //Se completa el observable y se cierra la subscripcion ya que ya no se emitiran mas valores
            subscriber.complete();
            // return;
          }

          subscriber.next(null);
          subscriber.complete();
        }
      ).pipe(delay(3000));

      return httpCallObservable;
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}
