import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { authActions, settingsActions } from 'app/core/store/actions';
import { SETTINGS_FORM } from '../forms';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  constructor(
    @Inject(SETTINGS_FORM)
    public settingsForm: FormGroup,
    private store: Store<any>,
  ) {
  }

  logout() {
    this.store.dispatch(authActions.logout());
  }

  submitForm() {
    this.store.dispatch(
      settingsActions.update({ user: { ...this.settingsForm.value } })
    );
  }
}
