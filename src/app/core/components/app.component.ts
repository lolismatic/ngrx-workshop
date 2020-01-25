import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { authActions } from '../store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
    private store: Store<any>,
  ) {}

  ngOnInit() {
    this.store.dispatch(authActions.populate());
  }
}
