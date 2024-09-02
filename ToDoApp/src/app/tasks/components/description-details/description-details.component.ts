import { Component } from '@angular/core';
import {  DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'tasks-description-details',
  template: `<p>{{ config.data.content }}</p>
  <div class="flex gap-2 mt-4" *ngIf="config.data.showButtons">
    <button pButton class=" p-2" severity="secondary" (click)="close()">Cancelar</button>
    <button pButton class="bg-red-600 p-2 text-white" (click)="removeTask()"> <i class="pi pi-trash"></i> Eliminar</button>
  </div>
  `,
})
export class DescriptionDetailsComponent {

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {}

  close() {
    this.ref.close(false);
  }

  removeTask() {
    this.ref.close(true);
  }
}
