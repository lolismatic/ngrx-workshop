import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import { COMPONENTS } from './components';
import { RESOLVERS } from './resolvers';

import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    RESOLVERS
  ]
})
export class ProfileModule {}
