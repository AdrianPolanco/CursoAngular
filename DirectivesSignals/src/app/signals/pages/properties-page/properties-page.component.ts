import { Component, signal } from '@angular/core';
import { User } from '../../interfaces/single-user-response.interface';

@Component({
  selector: 'signal-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent {
  user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  onFieldUpdated(field: 'email' | 'first_name' | 'last_name', value: string) {
    this.user.update(() => ({
      ...this.user(),
      [field]: value,
    }));
  }
}
