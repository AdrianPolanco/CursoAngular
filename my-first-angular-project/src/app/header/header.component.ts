//Creating component in Angular

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<header
    class="flex flex-row {{ backgroundColor }} h-24 p-1 gap-5 items-center mb-5"
  >
    <div class="flex flex-col w-1/12 h-auto">
      <img src="{{ iconPath }}" class=" h-2" />
    </div>
    <p class="text-base font-bold {{ textColor }}">{{ name }}</p>
  </header>`,
  styleUrls: ['../../styles.css'],
})
export class HeaderComponent {
  name = 'Angular';
  iconPath = '../../assets/angular-logo.png';
  backgroundColor = 'bg-blue-700';
  textColor = 'text-white';
}
