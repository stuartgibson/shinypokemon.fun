

import { NgOptimizedImage } from '@angular/common';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { NgbModule, NgbNavModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { LetDirective, PushPipe } from '@ngrx/component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Competitions } from 'store/reducers/competitions.reducer';
import { Players } from 'store/reducers/players.reducer';
import { AppComponent } from './app/components/app/app.component';
import { routes } from './app/routes';
import { Points, Pokemons, Years, reducers } from './store/reducers';

bootstrapApplication(
  AppComponent,
  {
    providers: [
      provideRouter(
        routes,
        withInMemoryScrolling({ scrollPositionRestoration: 'disabled'}),
        withViewTransitions()
      ),
      importProvidersFrom(
        BrowserModule,
        LetDirective,
        PushPipe,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers),
        StoreModule.forFeature(Competitions),
        StoreModule.forFeature(Players),
        StoreModule.forFeature(Points),
        StoreModule.forFeature(Pokemons),
        StoreModule.forFeature(Years),
        NgbNavModule,
        NgbPopoverModule,
        NgOptimizedImage,
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: !isDevMode(),
          autoPause: true,
          trace: false,
          traceLimit: 75,
          connectInZone: true
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(), connectInZone: true }),
        NgbModule
      )
    ]
})
.catch(err => console.error(err));
