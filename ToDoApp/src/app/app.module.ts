import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksRoutingModule } from './tasks/tasks-routing.module';
import { ControlAlertDirective } from './control-alert.directive';

@NgModule({
  declarations: [
    AppComponent,
    ControlAlertDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TasksRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
