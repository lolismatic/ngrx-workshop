import { InjectionToken, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserService } from 'app/core/services';

export const SETTINGS_FORM = new InjectionToken<FormGroup>('SETTINGS_FORM', {
  providedIn: 'root',
  factory: () => {
    const formBuilder = inject(FormBuilder);
    const userService = inject(UserService);

    const form = formBuilder.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    });

    userService.currentUser.subscribe((user) => {
      // Make a fresh copy of the current user's object to place in editable form fields
      // Fill the form
      form.patchValue({ ...user });
    });

    return form;
  }
});
