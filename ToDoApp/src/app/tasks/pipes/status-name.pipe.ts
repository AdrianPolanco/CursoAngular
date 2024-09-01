import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from '../types/task.type';

@Pipe({
  name: 'statusName'
})
export class StatusNamePipe implements PipeTransform {

  transform(value: TaskStatus): string {
    switch (value) {
      case TaskStatus.DONE:
        return 'Completada';
      case TaskStatus.IN_PROGRESS:
        return 'En progreso';
      default:
        return 'Pendiente';
    }
  }

}
