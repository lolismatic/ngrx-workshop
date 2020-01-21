import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import { COMPONENTS } from './components';
import { RESOLVERS } from './resolver';

import { EditorRoutingModule } from './editor-routing.module';

@NgModule({
  imports: [SharedModule, EditorRoutingModule],
  declarations: [...COMPONENTS],
  providers: [...RESOLVERS]
})
export class EditorModule {}
