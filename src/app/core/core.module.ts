import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { COMPONENTS } from './components';
import { GUARDS } from './guards';
import { INTERCEPTORS } from './interceptors';
import { SERVICES } from './services';

import { SharedModule } from '../shared';
import { EFFECTS } from './store';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    EffectsModule.forFeature(EFFECTS),
  ],
  providers: [
    ...INTERCEPTORS,
    ...GUARDS,
    ...SERVICES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [...COMPONENTS]
})
export class CoreModule { }
