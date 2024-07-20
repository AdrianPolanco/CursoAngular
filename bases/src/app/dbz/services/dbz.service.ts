import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  constructor() {}

  characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000,
    },
    {
      id: uuid(),
      name: 'Krilin',
      power: 500,
    },
  ];

  addNewCharacter(character: Character) {
    character.id = uuid();
    this.characters.push(character);
  }

  deleteCharacter(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
