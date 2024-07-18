import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  name: string = 'Ironman';
  age: number = 45;
  nameChanged = false;
  ageChanged = false;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
    this.nameChanged = true;
  }

  changeAge(): void {
    this.age = 30;
    this.ageChanged = true;
  }
}
