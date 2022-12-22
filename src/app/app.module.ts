import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LetModule, PushModule } from '@ngrx/component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { CatchComponent } from './components/catch/catch.component';
import { CompetitionNavComponent } from './components/competition-nav/competition-nav.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { CurrentCompetitionComponent } from './components/current-competition/current-competition.component';
import { CurrentYearComponent } from './components/current-year/current-year.component';
import { HomeComponent } from './components/home/home.component';
import { PreviousYearsComponent } from './components/previous-years/previous-years.component';
import { UserComponent } from './components/user/user.component';
import { YearComponent } from './components/year/year.component';
import { DateComponent } from './components/_shared/date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentCompetitionComponent,
    CurrentYearComponent,
    DateComponent,
    PreviousYearsComponent,
    CompetitionNavComponent,
    CompetitionComponent,
    HomeComponent,
    UserComponent,
    YearComponent,
    CatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LetModule,
    PushModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    LetModule,
    PushModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
