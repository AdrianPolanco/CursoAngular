import { AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Task, TaskStatus } from '../../types/task.type';
import { StorageService } from '../../services/storage.service';
import { DialogService } from 'primeng/dynamicdialog';
import { DescriptionDetailsComponent } from '../description-details/description-details.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tasks-table',
  templateUrl: './table.component.html',
  providers: [DialogService]
})
export class TableComponent implements OnInit, OnDestroy, AfterViewChecked {
  tasks: Task[] = [];
  tasks$ = this.storageService.tasks$;
  private taskSubscription?: Subscription;

  constructor(private storageService: StorageService, private dialogService: DialogService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
      this.taskSubscription = this.storageService.tasks$.subscribe(
        (tasks) => (this.tasks = tasks)
    );
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
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

  removeTask(task: Task) {
    const dialogRef = this.dialogService.open(DescriptionDetailsComponent, {
      header: "Eliminación de tarea",
      width: "65%",
      data: {
        content: `¿Estas seguro/a que deseas eliminar la tarea ${task.title}?`,
        showButtons: true
      }
    })

    dialogRef.onClose.subscribe((result) => {
      if (result) {
        this.storageService.remove(task.id);
      }
    })
  }

  changeStatus(task: Task, status: string) {
    if (status !== TaskStatus.DONE
      && status !== TaskStatus.IN_PROGRESS
      && status !== TaskStatus.PENDING
      && status !== TaskStatus.DUE) return;

    task.status = status as TaskStatus;

    this.storageService.update(task);
  }

  ngOnDestroy(): void {
   this.taskSubscription?.unsubscribe();
  }

}
