import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

/* Creando las rutas, con su path, el cual, cuando el usuario introduzca esa ruta, se le presentara el componente
especificado en el parametro component, con el titulo especificado en el parametro title */
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    /* Creando ruta dinamica de acuerdo al id despues de details/ en la ruta */
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
];

export default routeConfig;
