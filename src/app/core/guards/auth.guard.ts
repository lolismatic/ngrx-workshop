import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService
  ) {}

  canActivate(): Observable<boolean> {

    return this.userService.isAuthenticated.pipe(take(1));

  }
}
