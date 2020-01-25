import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { JwtService, UserService } from '../../services';
import { authActions } from '../actions';

@Injectable()
export class AuthEffects {
  populate = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.populate),
      tap(() => {
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
          this.userService
            .fetchUser()
            .subscribe(
              user => this.userService.setAuth(user),
              err => this.userService.purgeAuth()
            );
        } else {
          // Remove any potential remnants of previous auth states
          this.userService.purgeAuth();
        }
      })
    );
  }, { dispatch: false });

  constructor(
    private actions$: Actions,
    private jwtService: JwtService,
    private userService: UserService,
  ) { }
}
