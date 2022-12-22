import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionPageComponent } from './components/competition-page/competition-page.component';
import { HomeComponent } from './components/home/home.component';
import { RulesComponent } from './components/rules/rules.component';
import { UserComponent } from './components/user/user.component';
import { YearComponent } from './components/year/year.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'years/:id',
    component: YearComponent
  },
  {
    path: 'competitions/:id',
    component: CompetitionPageComponent
  },
  {
    path: 'users/:id',
    component: UserComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
