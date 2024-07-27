import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basicspage/basicspage.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { CommonPageComponent } from './pages/common-page/common-page.component';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';


const routes: Routes = [
  {
    path: '', component: BasicsPageComponent
  },
  {
    path: 'numbers', component: NumbersPageComponent
  },
  {
    path: "common", component: CommonPageComponent
  },
  {
    path: "custom", component: CustomPageComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
