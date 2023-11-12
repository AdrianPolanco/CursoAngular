import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>
            Does this location have laundry: {{ housingLocation?.laundry }}
          </li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  //Obteniendo una instancia/dependencia del ActivatedRoute
  route: ActivatedRoute = inject(ActivatedRoute);
  //Obteniendo una instancia/dependencia del HousingService
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  housingLocationId: number;

  constructor() {
    //Obteniendo el Id que esta como parametro en la ruta /details/:id
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    //Usando el metodo getHousingLocationById del servicio HousingService  con el id obtenido previament para obtener el objeto con ese id
    this.housingLocation = this.housingService.getHousingLocationById(
      this.housingLocationId
    );
  }
}
