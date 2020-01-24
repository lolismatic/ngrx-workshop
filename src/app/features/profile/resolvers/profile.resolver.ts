import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, withLatestFrom, map } from 'rxjs/operators';

import { ProfilesService, UserService } from '@app/services';
import { Profile } from '@app/models';

@Injectable()
export class ProfileResolver implements Resolve<Profile> {
  constructor(
    private profilesService: ProfilesService,
    private userService: UserService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.profilesService
      .get(route.params['username'])
      .pipe(
        withLatestFrom(this.userService.currentUser),
        map(([profile, user]) => {
          return {
            ...profile,
            isUser: (profile.username === user.username)
          };
        }),
        catchError((err) => this.router.navigateByUrl('/'))
      );

  }
}
