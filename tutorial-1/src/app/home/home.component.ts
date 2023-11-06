import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <!--Usamos el "data binging" para pasarle los valores de nuestro HomeComponent a nuestro HousingLocationComponent,
    a través de esta sintaxis:
  "[variableComponenteHijo]='nombreComponentePadre'" para hacerlo disponible dentro del componente que estamos usando, esto es similar a las props en
React:

<app-housing-location
        [housingLocation]="housingLocation"
      >
      </app-housing-location>

La variable entre corchetes DEBE de existir dentro del componente hijo, y la variable dentro de las comillas DEBE existir dentro del
componente padre
-->

      <!--
  Al añadir *ngFor ordenamos a Angular que renderice cada item housingLocation de la lista housingLocationList,
  ahora el [housingLocation] se refiere a cada item de la lista de housingLocationList en vez del housingLocation del HousingLocationComponent
-->
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      >
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = [];
  /* inject(Service) lo que hace es utilizar el patron de diseño Singleton para crear una UNICA INSTANCIA del HousingService 
  de manera que cada vez que se utilice el inject(HousingService) se devolvera la misma instancia del HousingService */
  //Utilizamos el servicio HousingService como dependencias, el cual definimos en housing.service.ts
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
