import { Component } from '@angular/core';

@Component({
  selector: 'app-basicspage',
  templateUrl: './basicspage.component.html',
  styleUrl: './basicspage.component.css'
})
export class BasicsPageComponent {
  name: string = "AdRIaN"
  date: Date = new Date()
}
