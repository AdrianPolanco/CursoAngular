import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  constructor() { }

  @Input() characters: Character[] = [];
  @Output() onDeleteCharacter = new EventEmitter<string>();

  deleteCharacter(id: string) {
    this.onDeleteCharacter.emit(id);
  }
}
