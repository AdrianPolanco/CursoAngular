import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'tasks-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  items: MenuItem[] = [
    {
      label: 'Tasks',
      icon: 'pi pi-list-check',
      routerLink: '/',
      shortcut: 'Ctrl+T',
    },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
      routerLink: '/about',
      shortcut: 'Ctrl+A',
    },
  ];
}
