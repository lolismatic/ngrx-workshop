import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { COMPONENTS } from './components';
import { GUARDS } from './guards';
import { INTERCEPTORS } from './interceptors';
import { SERVICES } from './services';

import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
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
