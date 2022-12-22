import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { LetModule, PushModule } from '@ngrx/component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { AppRoutingModule } from './app-routing.module';
import { components } from './components';
import { AppComponent } from './components/app/app.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LetModule,
    PushModule,
    StoreModule.forRoot(reducers),
    NgbPopoverModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    LetModule,
    PushModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
