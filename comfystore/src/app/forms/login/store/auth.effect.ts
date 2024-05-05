import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/auth.service';
import * as AuthActions from '../store/auth.action';
import { exhaustMap, map, tap } from 'rxjs';
@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}
  loggedIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN),
      tap(() => console.log('Auth login effect')),
      exhaustMap((action: AuthActions.Login) =>
        this.authService
          .login(action.payload)
          .pipe(map((res) => new AuthActions.LoginSuccess(res)))
      )
    )
  );
}

// new AuthActions.Login(res)
