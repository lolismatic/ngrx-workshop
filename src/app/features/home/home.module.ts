import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import { COMPONENTS } from './components';
import { RESOLVERS } from './resolvers';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  providers: [
    ...RESOLVERS
  ]
})
export class HomeModule {}
