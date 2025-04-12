import { Routes } from '@angular/router';
import { GeneratorsComponent } from './components/admin/generators/generators.component';
import { CompetitionPageInfographicComponent } from './components/competitions/competition-page/competition-page-infographic.component';
import { CompetitionPageComponent } from './components/competitions/competition-page/competition-page.component';
import { CompetitionsComponent } from './components/competitions/competitions/competitions.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { RulesComponent } from './components/pages/rules/rules.component';
import { PlayerPageComponent } from './components/player/player-page/player-page.component';
import { PlayersComponent } from './components/player/players/players.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { TrophySeasonPageComponent } from './components/trophy-seasons/trophy-season-page/trophy-season-page.component';
import { TrophySeasonsComponent } from './components/trophy-seasons/trophy-seasons-page/trophy-seasons.component';
import { YearPageComponent } from './components/years/year-page/year-page.component';
import { CurrentCompetitionGuard } from './current-competition-guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'competitions',
    component: CompetitionsComponent,
  },
  {
    path: 'competitions/current',
    canActivate: [CurrentCompetitionGuard],
    component: CompetitionsComponent,
  },
  {
    path: 'competitions/:id',
    component: CompetitionPageComponent,
  },
  {
    path: 'competitions/:id/infographic',
    component: CompetitionPageInfographicComponent,
  },
  {
    path: 'admin/generators',
    component: GeneratorsComponent,
  },
  {
    path: 'players',
    component: PlayersComponent,
  },
  {
    path: 'players/:id',
    component: PlayerPageComponent,
  },
  {
    path: 'rules',
    component: RulesComponent,
  },
  {
    path: 'trivia',
    component: TriviaComponent,
  },
  {
    path: 'trophy-seasons',
    component: TrophySeasonsComponent,
  },
  {
    path: 'trophy-seasons/:id',
    component: TrophySeasonPageComponent,
  },
  {
    path: 'years/:id',
    component: YearPageComponent,
  },
];
