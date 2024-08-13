import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: ``,
})
export class DynamicPageComponent {
  constructor(private formBuilder: FormBuilder) {}

  myForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    newFavoriteGame: ['', Validators.required],
    favoriteGames: this.formBuilder.array([
      ['Destiny 2', Validators.required],
      ['Delta Force', Validators.required],
    ]),
  });

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
  }

  onAddInput() {
    const favoriteGame = this.myForm.controls.newFavoriteGame.value
    if(!favoriteGame) return;
    const addedGame = this.formBuilder.control(favoriteGame, Validators.required)
    this.favoriteGames.push(addedGame);
    this.myForm.controls.newFavoriteGame.reset();
  }

  onRemoveInput(index: number) {
    this.favoriteGames.removeAt(index);
  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }


}
