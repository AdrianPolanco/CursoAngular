import { Component } from '@angular/core';
import { Task, TaskStatus } from '../../types/task.type';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'tasks-table',
  templateUrl: './table.component.html'
})
export class TableComponent {
  tasks: Task[] = [];

  constructor(private storageService: StorageService) {
    this.tasks = this.storageService.get();
  }

  getStatusColor(status: TaskStatus): 'success' | 'warning' | 'danger' | 'info' {
    switch (status) {
      case TaskStatus.DONE:
        return 'success';
      case TaskStatus.IN_PROGRESS:
        return 'info';
      case TaskStatus.DUE:
        return 'danger';
      default:
        return 'warning';
    }
  }
}
