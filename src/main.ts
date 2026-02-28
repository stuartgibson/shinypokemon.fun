import { provideZonelessChangeDetection, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/components/app/app.component';
import { routes } from './app/routes';
import { stateProviders } from './store';

bootstrapApplication(
  AppComponent,
  {
    providers: [
      provideZonelessChangeDetection(),
      ...stateProviders,
      provideAnimationsAsync(),
      provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled'})),
      provideRouterStore(),
      provideStore({router: routerReducer}),
      provideStoreDevtools({
        maxAge: 25,
        logOnly: !isDevMode(),
        autoPause: false,
        trace: true,
        traceLimit: 75
      })
    ]
})
.catch(err => console.error(err));
