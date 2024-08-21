import { Component, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'signals-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  //Para obtener el valor de la señal se debe "llamar", ejemplo: this.menuItems()
  menuItems = signal<MenuItem[]>([
    { title: 'Contador', route: 'counter' },
    { title: 'Usuario', route: 'info' },
    { title: 'Mutaciones', route: 'properties' },
  ]);
}
