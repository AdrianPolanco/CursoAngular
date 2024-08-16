import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/country.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html'
})
export class SelectorPageComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder, private countriesService: CountriesService) {
    this.myForm = this.fb.group({
      region: ['', Validators.required],
      country: ['', Validators.required],
      borders: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    //En el ngOnInit ya tengo acceso a los servicios inyectados y a las propiedades inicializadas como myForm
    //Por lo que puedo suscribirme a los cambios del control del campo de Region invocando al método onRegionChanged
    this.onRegionChanged();
  }

  myForm: FormGroup;
  regionSuscription?: Subscription;


  get regions(): Region[]{
    return this.countriesService.regions;
  }

  ngOnDestroy(): void {
    //Cuando el componente se destruye, se desuscribe del observable
    this.regionSuscription?.unsubscribe();
  }

  private onRegionChanged(): void {
    this.regionSuscription = this.myForm
      .get('region')!
      .valueChanges.subscribe((value) => console.log(value));
  }
}
