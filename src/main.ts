import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from '@environments';

import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

const bootstrapPromise =  platformBrowserDynamic().bootstrapModule(AppModule);

// Logging bootstrap information
bootstrapPromise.then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));
