import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})

//Creando un servicio housing en Angular con el comando ng generate service housing --skip-tests, para no añadir pruebas

/* Creamos esta clase (o servicio), la hacemos injectable con el decorador @Injectable({ providedIn: 'root'}) para poder inyectarla como dependencia a los componentes que la necesiten utilizar, el providedIn: 'root' especifica que el servicio estara
  disponible en toda la aplicacion */
export class HousingService {
  constructor() {}

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
