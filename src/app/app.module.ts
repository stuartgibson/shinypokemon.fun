import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../store/reducers';
import { CurrentCompetitionComponent } from './current-competition/current-competition.component';
import { CurrentYearComponent } from './current-year/current-year.component';
import { PreviousYearsComponent } from './previous-years/previous-years.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentCompetitionComponent,
    CurrentYearComponent,
    PreviousYearsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
