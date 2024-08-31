import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'tasks-main-page',
  templateUrl: './tasks-main-page.component.html',
  styles: ``
})
export class TasksMainPageComponent {
  constructor(private storageService: StorageService) { }

  get tasks() {
    return this.storageService.get();
  }

  get firstTask() {
   return this.tasks.filter(
     (task) => task.id === '4475fa4b-1d69-432d-86f0-e8b15071359d'
   );
  }
}
