import { Routes } from "@angular/router";
import { CompetitionPageComponent } from "./components/competitions/competition-page/competition-page.component";
import { CompetitionsComponent } from "./components/competitions/competitions/competitions.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { RulesComponent } from "./components/pages/rules/rules.component";
import { UserComponent } from "./components/user/user.component";
import { YearPageComponent } from "./components/years/year-page/year-page.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'competitions',
    component: CompetitionsComponent
  },
  {
    path: 'competitions/:id',
    component: CompetitionPageComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path: 'users/:id',
    component: UserComponent
  },
  {
    path: 'years/:id',
    component: YearPageComponent
  }
];
