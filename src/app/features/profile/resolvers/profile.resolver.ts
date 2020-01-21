import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProfilesService } from '@app/services';
import { Profile } from '@app/models';

@Injectable()
export class ProfileResolver implements Resolve<Profile> {
  constructor(
    private profilesService: ProfilesService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    return this.profilesService.get(route.params['username'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));

  }
}
