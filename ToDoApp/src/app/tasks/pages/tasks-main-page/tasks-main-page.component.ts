import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'tasks-main-page',
  templateUrl: './tasks-main-page.component.html'
})
export class TasksMainPageComponent {
  constructor(private storageService: StorageService) { }

  get tasks() {
    return this.storageService.tasks$;
  }

}
