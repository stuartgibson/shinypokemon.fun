import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'models/pokemon.model';
import { Observable } from 'rxjs';
import { CompetitionActions } from 'store/actions/competition.actions';
import { competitionPageViewModel, CompetitionPageViewModel } from 'store/view-models/competition-page.view-model';

@Component({
  selector: 'sp-competition-page',
  templateUrl: './competition-page.component.html',
  styleUrls: ['./competition-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionPageComponent implements OnDestroy {

  private readonly store:Store = inject(Store);

  vm$: Observable<CompetitionPageViewModel> = this.store.select(competitionPageViewModel);

  filterPokemon(event:any):void {
    this.store.dispatch(
      CompetitionActions.filter({query: event.target.value})
    );
  }

  trackByPokemon(index:number, pokemon:Pokemon):string {
    return pokemon.id;
  }

  ngOnDestroy():void {
    this.store.dispatch(CompetitionActions.clear());
  }
}
