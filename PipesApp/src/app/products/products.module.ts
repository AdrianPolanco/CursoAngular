import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { BasicsPageComponent } from './pages/basicspage/basicspage.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { CommonPageComponent } from './pages/common-page/common-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { FliesPipe } from './pipes/flies.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    CommonPageComponent,
    CustomPageComponent,
    ToggleCasePipe,
    FliesPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ],
  exports: [ToggleCasePipe]
})
export class ProductsModule { }
