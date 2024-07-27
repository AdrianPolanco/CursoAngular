import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, isUppercase: boolean): string{
    return isUppercase? value.toUpperCase() : value.toLowerCase();
  }

}
