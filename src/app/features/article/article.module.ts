import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import { COMPONENTS } from './components';
import { RESOLVERS } from './resolvers';
import { PIPES } from './pipes';

import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ArticleRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
  ],
  providers: [
    ...RESOLVERS
  ]
})
export class ArticleModule {}
