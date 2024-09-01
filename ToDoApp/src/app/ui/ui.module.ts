import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DynamicDialogModule } from 'primeng/dynamicdialog';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MenubarModule,
    BadgeModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
    DialogModule,
    InputTextareaModule,
    CalendarModule,
    TableModule,
    TagModule,
    DynamicDialogModule
  ],
})
export class UiModule {}
