import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flies'
})
export class FliesPipe implements PipeTransform {

  transform(value: boolean): string {
    return value? "Vuela" : "No vuela";
  }

}
