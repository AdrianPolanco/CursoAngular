import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

//Se definen las rutas de la aplicacion. Cada ruta tiene una URL y un componente que se va a cargar cuando se acceda a esa URL
const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: "about",
    component: AboutPageComponent
  },
  {
    path: "contact",
    component: ContactPageComponent
  },
  { //Si la URL no coincide con ninguna de las rutas anteriores se redirige a la ruta home
    path: '**',
    redirectTo: 'home'
  }
];

//Configuracion basica para el router de Angular. Si el router es el principal (el que se encuentra en la raiz del src del proyecto)
//se usa RouterModule.forRoot(routes) y si es un router para algun modulo  secundario se usa RouterModule.forChild(routes)
//Se exporta el modulo para que pueda ser usado en otros modulos
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
