import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [SelectorPageComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class CountriesModule { }
