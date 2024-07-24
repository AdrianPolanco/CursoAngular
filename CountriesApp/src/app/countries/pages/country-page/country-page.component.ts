import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  //IMPORTANT: El constructor es un punto en el cual aun no se ha creado el HTML, recien se esta empezando a construir el componente
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private countryService: CountryService) {

  }

  //IMPORTANT: country es Country | undefined ya que no se inicializa inmediatamente en el constructor, sino recien en el ngOnInit
  country?: Country
  ngOnInit(): void {
    //IMPORTANT: ActivatedRoute es un observable, por lo que se debe subscribir para obtener el valor
    //IMPORTANT: ActivatedRoute tiene un objeto llamado params, el cual es un observable que contiene los parametros de la URL actual
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.countryService.searchCountryByAlphaCode(id))
    )
      .subscribe(country => {
        //Sacamos al usuario de la pantalla usando el router si no se encuentra el país
        if (!country) return this.router.navigateByUrl('');
        return this.country = country;
      })
  }
}
