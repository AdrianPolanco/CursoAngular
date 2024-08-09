import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../../interfaces/hero.interface';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit {
  constructor(private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    
  }

  hero?: Hero;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroesService.getById(id))
    )
    .subscribe(hero => hero? this.hero = hero : this.router.navigate(['/heroes']));
  }

  goBack(): void { 
    this.router.navigateByUrl('/heroes');
  }
}
