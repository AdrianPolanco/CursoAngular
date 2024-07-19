import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';


//CommonModule es el Module que contiene las directivas de Angular como ngIf, ngFor, ngSwitch, etc.
//Como otro Module (HeroesModule) ya importa CommonModule, ya Angular lo tiene en memoria al importarlo aqui

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
