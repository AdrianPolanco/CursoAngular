import { Component } from '@angular/core';

@Component({
  selector: 'gallery-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  sidebarItems = [
    {
      label: 'Galería',
      icon: 'imagesmode',
      url: './images',
    },
    {
      label: 'Subir',
      icon: 'upload',
      url: './upload',
    },
    {
      label: 'Favoritos',
      icon: 'favorites',
      url: './favorites',
    },
  ];
}
