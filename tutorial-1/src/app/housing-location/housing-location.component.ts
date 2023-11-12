import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <!--Podemos utilizar las propiedades del objeto de tipo HousingLocation que nos pasaron desde el componente padre
    (en este caso, el componente padre es HomeComponent)-->
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <!--Usar [routerLink]="['/ruta', hrefValue]" para ir a otro componente o vista que matchee con la ruta-->
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  /* @Input() es un decorador en Angular que permite que una propiedad de un componente reciba datos de otro componente
  
  NO ESTA HABLANDO DEL INPUT en el sentido de un Input HTML, sino de recibir datos de otro componente*/
  @Input() housingLocation!: HousingLocation;
}
