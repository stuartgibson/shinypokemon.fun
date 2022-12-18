import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../store/reducers';
import { CurrentCompetitionComponent } from './components/current-competition/current-competition.component';
import { CurrentYearComponent } from './components/current-year/current-year.component';
import { PreviousYearsComponent } from './components/previous-years/previous-years.component';
import { CompetitionNavComponent } from './components/competition-nav/competition-nav.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { YearComponent } from './components/year/year.component';
import { CatchComponent } from './components/catch/catch.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentCompetitionComponent,
    CurrentYearComponent,
    PreviousYearsComponent,
    CompetitionNavComponent,
    CompetitionComponent,
    YearComponent,
    CatchComponent
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
