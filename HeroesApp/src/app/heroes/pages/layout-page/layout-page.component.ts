import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  constructor(private authService: AuthService, private router: Router) {}
  sidebarItems = [
    {
      label: "Listado",
      icon: "label",
      url: "./list"
    },
    {
      label: "Añadir",
      icon: "add",
      url: "./new"
    },
    {
      label: "Buscar",
      icon: "search",
      url: "./search"
    }
  ]

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
