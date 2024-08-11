import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { publicGuard } from './auth/guards/public.guard';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule),
    canActivate: [publicGuard]
  },
  {
    path: "heroes",
    loadChildren: () => import("./heroes/heroes.module").then(m => m.HeroesModule),
    //Protecting the route with the AuthGuard
    canActivate: [AuthGuard],
    canMatch: [AuthGuard]
  },
  {
    path: "404",
    component: Error404PageComponent
  },
  {
    path: "",
    redirectTo: "heroes",
    pathMatch: "full" //Usando pathMatch: 'full' para que la redirección solo se haga si la URL es exactamente igual a la ruta vacía.
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
