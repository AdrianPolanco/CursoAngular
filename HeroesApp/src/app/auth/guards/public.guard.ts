import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map, tap } from 'rxjs';

export const publicGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  //IMPORTANTE: No usamos .suscribe aquí ya que Angular ya maneja internamente la suscripción de los Guards
  return authService.checkAuthentication().pipe(
    tap((isAuthenticated) => {
      if (isAuthenticated) router.navigateByUrl('/');
    }),
    map((isAuthenticated) => !isAuthenticated)
  );
};
