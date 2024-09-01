import { Component } from '@angular/core';
import {  DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'tasks-description-details',
  template: `<p>{{ config.data.content }}</p>`,
})
export class DescriptionDetailsComponent {
  visible: boolean = true;

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {}

  close() {
    this.ref.close();
  }
}
