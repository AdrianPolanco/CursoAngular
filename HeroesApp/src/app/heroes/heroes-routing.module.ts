import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutPageComponent,
    children: [
      {
        path: "new",
        component: NewPageComponent
      },
      {
        path: "search",
        component: SearchPageComponent
      },
      {
        path: "edit/:id",
        component: NewPageComponent
      },
      {
        path: "list",
        component: ListPageComponent
      },
      {
        //IMPORTANTE: El orden de las rutas es importante, si se coloca esta ruta al principio, las demás rutas no funcionarán.
        //Ya que tecnicamente, esta ruta, al ser solo :id puede ser cualquier cosa, por lo que las demás rutas no se ejecutarán.
        path: ":id",
        component: HeroPageComponent
      },
      {
        path: "**",
        redirectTo: "list"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
