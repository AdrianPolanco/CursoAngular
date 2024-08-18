import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interface';
import { filter, Subscription, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
})
export class SelectorPageComponent implements OnInit, OnDestroy {
  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {
    this.myForm = this.fb.group({
      region: ['', Validators.required],
      country: ['', Validators.required],
      border: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //IMPORTANT: En el ngOnInit ya tengo acceso a los servicios inyectados y a las propiedades inicializadas como myForm
    //Por lo que puedo suscribirme a los cambios del control del campo de Region invocando al método onRegionChanged
    this.onRegionChanged();
    this.onCountryChanged();
  }

  myForm: FormGroup;
  regionSuscription?: Subscription;
  countrySuscription?: Subscription;
  countries: SmallCountry[] = [];
  borders: SmallCountry[] = [];

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  get selectedCountry(): string {
    return this.myForm.get('country')?.value;
  }

  ngOnDestroy(): void {
    //Cuando el componente se destruye, se desuscribe del observable
    this.regionSuscription?.unsubscribe();
  }

  private onRegionChanged(): void {
    this.regionSuscription = this.myForm
      .get('region')!
      .valueChanges //IMPORTANT: switchMap is used to get the value emited by the observable, and if the value changes before the previous observable is completed, it cancels the previous observable and subscribes to the new one
      .pipe(
        tap(() => this.myForm.get('countries')?.setValue('')),
        tap( () => this.borders = []),
        switchMap((region) =>
          this.countriesService.getCountriesByRegion(region)
        )
      )
      .subscribe((countries) => {
        //IMPORTANT: Si quiero que el valor salga en la consola, debo hacer el console.log dentro de esta funcion, ya que dentro de esta funcion estara todo lo que se ejecutara cada vez que se actualice el valor emitido, lo que este afuera de esta funcion solo se ejecutara una vez
        this.countries = countries;
      });
  }

  private onCountryChanged(): void {
    this.countrySuscription = this.myForm
      .get('country')!
      .valueChanges //IMPORTANT: switchMap is used to get the value emited by the observable, and if the value changes before the previous observable is completed, it cancels the previous observable and subscribes to the new one
      .pipe(
        tap(() => this.myForm.get('border')?.setValue('')),
        //El !!value lo que hace es pasar el valor a booleano, si es un valor valido, sera true, si es null, undefined o vacio sera false
        filter((country: string) => !!country),
        switchMap((alphaCode) =>
          this.countriesService.getCountryByAlphaCode(alphaCode)
        ),
        switchMap((country) =>
          this.countriesService.getCountryBordersByCodes(country.borders)
        )
      )
      .subscribe((countries) => {
        //IMPORTANT: Si quiero que el valor salga en la consola, debo hacer el console.log dentro de esta funcion, ya que dentro de esta funcion estara todo lo que se ejecutara cada vez que se actualice el valor emitido, lo que este afuera de esta funcion solo se ejecutara una vez
        this.borders = countries;
      });
  }
}
