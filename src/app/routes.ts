import { Routes } from "@angular/router";
import { CompetitionPageComponent } from "./components/competitions/competition-page/competition-page.component";
import { CompetitionsComponent } from "./components/competitions/competitions/competitions.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { RulesComponent } from "./components/pages/rules/rules.component";
import { PlayerPageComponent } from "./components/player/player-page/player-page.component";
import { PlayersComponent } from "./components/player/players/players.component";
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
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'players/:id',
    component: PlayerPageComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path: 'years/:id',
    component: YearPageComponent
  }
];
