import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  addNewCharacter(character: Character) {
    this.dbzService.addNewCharacter(character);
  }

  deleteCharacter(id: string) {
    this.dbzService.deleteCharacter(id);
  }
}
