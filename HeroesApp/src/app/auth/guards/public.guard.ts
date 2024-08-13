import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map, tap } from 'rxjs';

export const publicGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  //IMPORTANTE: No usamos .suscribe aquí ya que Angular ya maneja internamente la suscripción de los Guards
  return authService.checkAuthentication().pipe(
    //IMPORTANTE: Usamos tap para realizar efectos secundarios SIN modificar el valor emitido del observable
    //Ej. Aquí estamos redirigiendo a la ruta raíz si el usuario ya está autenticado, lo cual es un efecto secundario
    tap((isAuthenticated) => {
      if (isAuthenticated) router.navigateByUrl('/');
    }),
    //IMPORTANTE: Usamos map para transformar el valor emitido del observable
    //Ej. Aquí estamos negando el valor de isAuthenticated para que devuelva true si no está autenticado
    //El valor emitido del map es lo que se pasa al siguiente operador o se emite al suscriptor
    //Si esta autenticado, el valor pasa a false, lo que significa que no puede acceder a la ruta
    //Si no esta autenticado, el valor pasa a true, lo que significa que puede acceder a la ruta
    map((isAuthenticated) => !isAuthenticated)
  );
};
