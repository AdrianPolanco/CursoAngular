import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrl: './common-page.component.css'
})
export class CommonPageComponent {
  //i18n Select
  name: string = "Adrian";
  gender: "male" | "female" = "male";
  genderMap = {
    male: "invitarlo",
    female: "invitarla"
  }

  changeName() {
    this.name = "Melissa";
    this.gender = "female";
  }

  //i18n Plural
  clients: string[] = ["Adrian", "Melissa", "Juan", "Pedro", "Maria"];
  clientsMap = {
    //Si hay 0 clientes en el array, muestra este mensaje
    "=0": "no tenemos ningún cliente esperando.",
    //Si hay 1 cliente en el array, muestra este mensaje
    "=1": "tenemos un cliente esperando.",
    //Si hay más de 1 cliente en el array, muestra este mensaje, el # es el número de clientes en el array
    "other": "tenemos # clientes esperando."
  }

  deleteClient() {
    this.clients.pop();
  }

  //KeyValues Pipe and Json Pipe
  person = {
    name: "Adrian",
    age: 22,
    address: "Calle 123"
  }

  //Async Pipe
  //El Async Pipe hace el cleanup de los observables y promesas, por lo que no es necesario hacerlo manualmente
  observableTimer = interval(2000);
  promiseTimer = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 4000);
  });
}
