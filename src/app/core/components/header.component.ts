import { Component } from '@angular/core';

import { UserService } from '../services';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  currentUser$ = this.userService.currentUser;

  constructor(
    private userService: UserService
  ) {}

}
