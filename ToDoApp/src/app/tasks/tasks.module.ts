import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UiModule } from '../ui/ui.module';
import { TasksMainPageComponent } from './pages/tasks-main-page/tasks-main-page.component';
import { TasksAboutPageComponent } from './pages/tasks-about-page/tasks-about-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { TasksLayoutComponent } from './layouts/tasks-layout/tasks-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlAlertDirective } from './directives/control-alert.directive';



@NgModule({
  declarations: [
    NavbarComponent,
    TasksMainPageComponent,
    TasksAboutPageComponent,
    TasksLayoutComponent,
    FooterComponent,
    ControlAlertDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiModule
  ]
})
export class TasksModule { }