import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from "./shared/shared.module";

//Configurando el locale
import localESDO from '@angular/common/locales/es-DO'
import localFRCA from '@angular/common/locales/fr-CA'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localESDO);
registerLocaleData(localFRCA);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule],
  providers: [{
    //Estableciendo el es-DO como locale por defecto
    provide: LOCALE_ID, useValue: 'es-DO'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
