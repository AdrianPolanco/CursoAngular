import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output() onAddCharacter = new EventEmitter<Character>();

  character: Character = {
    name: '',
    power: 0
  }

  addCharacter() {
    //debugger;
    if (this.character.name.length === 0 || this.character.power < 0) return;
    //Emite un nuevo valor o evento con el character recibido, evento al que esta suscrito el componente padre
    this.onAddCharacter.emit(this.character);
    this.character = {
      name: "",
      power: 0
    }
  }
}
