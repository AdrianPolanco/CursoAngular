import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { HelloWorldNgIfComponent } from './hello-world-ngif/hello-world-ngif.component';
import { NgIfOwnExampleComponent } from './ng-if-own-example/ng-if-own-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    HelloWorldNgIfComponent,
    NgIfOwnExampleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
