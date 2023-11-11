

import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/components/app/app.component';
import { routes } from './app/routes';
import { environment } from './environments/environment';
import { stateProviders } from './store';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(
  AppComponent,
  {
    providers: [
      ...stateProviders,
      provideAnimations(),
      provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled'})),
      provideRouterStore(),
      provideStore({router: routerReducer}),
      provideStoreDevtools({
        maxAge: 25,
        logOnly: environment.production,
        autoPause: false,
        trace: true,
        traceLimit: 75
      })
    ]
})
.catch(err => console.error(err));
