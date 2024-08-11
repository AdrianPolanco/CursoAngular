import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``,
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login('fernando@gmail.com', '123456').subscribe((user) => {
      /*Redirije a /heroes ya que en app-routing.module.ts tengo esto:
        {
    path: "",
    redirectTo: "heroes",
    pathMatch: "full"
  }

    Por tanto, la ruta resultante es localhost:4200/ lo que redirije a localhost:4200/heroes
  ,*/
      this.router.navigate(['/']);
    });
  }
}
