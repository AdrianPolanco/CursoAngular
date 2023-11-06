import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule],
  standalone: true,
  template: `
    <main>
      <!--Usando [routerLink]="['/']" para que, al pusar en el elemento <a> con esa directiva, te redirija a la vista del inicio-->
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img
            class="brand-logo"
            src="/assets/logo.svg"
            alt="logo"
            aria-hidden="true"
          />
        </header>
      </a>
      <section class="content">
        <!--El <router-outlet> sirve como marcador para indicarle a Angular donde se renderizarán los componentes definidos en mis rutas cuando se visite la ruta respectiva, por ejemplo, cuando se visite la ruta /details/1, el DetailsComponent de renderizara en donde esta el <router-outlet>-->
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = 'homes';
}
