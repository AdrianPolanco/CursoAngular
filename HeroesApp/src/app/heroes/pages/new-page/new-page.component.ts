import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../../interfaces/hero.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { HeroesService } from '../../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit {

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute,
    private router: Router, private snackbar: MatSnackBar, private dialog: MatDialog) { }

  publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics'}
  ];

  form = new FormGroup({
      id: new FormControl(''),
      superhero: new FormControl('', {nonNullable: true}),
      publisher: new FormControl<Publisher>(Publisher.DCComics),
      alter_ego: new FormControl(''),
      first_appearance: new FormControl(''),
      characters: new FormControl(''),
      alt_img: new FormControl('')
  });

  get currentHero(): Hero {
    return this.form.value as Hero;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroesService.getById(id))
    ).subscribe(hero => {
      if (!hero) return this.router.navigateByUrl('/');
      this.form.reset(hero);
      return;
    })

  }

  onSubmit() {
    if (this.form.invalid) return;

    if (this.currentHero.id) {
      this.heroesService.update(this.currentHero)
        .subscribe(hero => {
          this.showSnackbar(`Hero ${hero.superhero} updated`);
         });
      return;
    }

    this.heroesService.add(this.currentHero)
      .subscribe(hero => {
        this.router.navigate(['/heroes/edit', hero.id]);
        this.showSnackbar(`Hero ${hero.superhero} created`);
      });
  }

  onDeleteHero() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.form.value
    })

    dialogRef.afterClosed()
      .pipe(
        //Filtrando que el resultado sea true, si no, no se ejecuta el siguiente operador
        filter((result: boolean) => result),
        switchMap(() => this.heroesService.delete(this.currentHero.id)),
        filter((result: boolean) => result)
    ) //Si se cumple todo lo anterior, se ejecuta el suscribe que redirige a la lista de heroes y muestra un snackbar
      .subscribe(
      () => {
        this.router.navigate(['/heroes']);
        this.showSnackbar(`Héroe ${this.currentHero.superhero} eliminado`);
      }
    )
  }

  private showSnackbar(message: string) {
    this.snackbar.open(message, 'Done', {
      duration: 2500
    });
  }
}
