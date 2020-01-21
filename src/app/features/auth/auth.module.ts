import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import { COMPONENTS } from './components';
import { GUARDS } from './guards';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...GUARDS,
  ]
})
export class AuthModule {}
