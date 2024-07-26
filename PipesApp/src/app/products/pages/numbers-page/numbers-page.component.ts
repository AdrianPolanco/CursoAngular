import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css',
})
export class NumbersPageComponent {
  price: number = 14532.542;
  percentage: number = 0.4856;
  currentCurrency: string = 'USD';
}
