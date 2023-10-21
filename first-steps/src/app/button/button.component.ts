import { Component } from '@angular/core';
import IButton from './IButton';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  buttonObject: IButton = {
    name: 'Adrian',
    inputValue: '',
    title: 'Disabled',
    isEnabled: false,
    clickFunction(): void {
      alert('You have clicked me');

      this.name = this.inputValue;
      //this.isEnabled = !this.isEnabled;
    },
    changeInputValue(e: Event): void {
      const inputElement: HTMLInputElement = e.target as HTMLInputElement;
      const value: string = inputElement.value;
      this.inputValue = value;
    },
    renderValue(): string {
      return this.isEnabled ? 'Disabled' : 'Enabled';
    },
  };
}
