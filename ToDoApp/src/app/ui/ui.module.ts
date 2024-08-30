import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MenubarModule,
    BadgeModule,
    InputTextModule,
    RippleModule,
  ],
})
export class UiModule {}
