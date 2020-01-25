import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { map, distinctUntilChanged, tap } from 'rxjs/operators';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User, RegisterCredentials, LoginCredentials } from '../models';


@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService
  ) {}

  setAuth(user: User) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  fetchUser() {
    return this.apiService
      .get('/user')
      .pipe(
        map((data) => data.user as User)
      );
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  register(user: RegisterCredentials): Observable<User> {
    return this.apiService
      .post('/users', {user})
      .pipe(map((data) => data.user));
  }

  login(user: LoginCredentials): Observable<User> {
    return this.apiService
      .post('/users/login', {user})
      .pipe(map((data) => data.user));
  }

  private updateUser(user: User): Observable<User> {
    return this.apiService
      .put('/user', { user })
      .pipe(
        map(data => data.user as User)
      );
  }

  // Update the user on the server (email, pass, etc)
  update(user): Observable<User> {
    return this.updateUser(user)
    .pipe(
      tap((savedUser) => {
        // Update the currentUser observable
        this.currentUserSubject.next(savedUser);
      })
    );
  }

}
