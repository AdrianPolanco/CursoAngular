//Creating component in Angular

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  /*NO es recomendado poner el HTML en el template, ya que hace el codigo menos mantenible, y al ser pasado
  como string, si hay algun error no nos avisará en tiempo de compilacion*/
  templateUrl: './header.component.html',
  styleUrls: ['../../styles.css'],
})
export class HeaderComponent {
  name = 'Angular';
  iconPath = '../../assets/angular-logo.png';
  backgroundColor = 'bg-blue-700';
  textColor = 'text-white';
}
