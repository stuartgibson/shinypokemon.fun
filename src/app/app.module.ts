import { NgOptimizedImage } from '@angular/common';
import { isDevMode, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule, NgbNavModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { LetDirective, PushPipe } from '@ngrx/component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Competitions } from 'store/reducers/competitions.reducer';
import { Players } from 'store/reducers/players.reducer';
import { Points, Pokemons, reducers, Years } from '../store/reducers';
import { AppRoutingModule } from './app-routing.module';
import { components } from './components';
import { AppComponent } from './components/app/app.component';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() , connectInZone: true}),
    NgbModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
