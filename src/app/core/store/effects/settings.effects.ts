import { Injectable, Inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { switchMap, tap, catchError, finalize } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

import { UserService } from '../../services';
import { settingsActions } from '../actions';
import { SETTINGS_FORM } from 'app/features/settings/forms';

@Injectable()
export class SettingsEffects {
  update = createEffect(() => {
    return this.actions$.pipe(
      ofType(settingsActions.update),
      switchMap(({user}) => {
        this.settingsForm.disable();

        return this.userService
          .updateUser(user)
          .pipe(
            tap(
              (updatedUser) => {
                this.router.navigateByUrl('/profile/' + updatedUser.username);

                // Update the currentUser observable
                // TODO this will not be required when currentUserSubject is no longer used
                this.userService['currentUserSubject'].next(updatedUser);
              }
            ),
            catchError(
              (err) => {
                // Form update errors as well as
                this.settingsForm.setErrors({ remoteValidation: err });

                return [];
              }
            ),
            finalize(() => {
                this.settingsForm.enable();
            })
          );
      })
    );
  }, { dispatch: false });

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router,
    @Inject(SETTINGS_FORM)
    private settingsForm: FormGroup,
  ) { }
}
