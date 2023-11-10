import { ChangeDetectionStrategy, Component, inject, OnDestroy, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { CompetitionActions } from 'store/actions/competition.actions';
import { competitionPageViewModel, CompetitionPageViewModel } from 'store/view-models/competition-page.view-model';
import { PokemonComponent } from '../../pokemon/pokemon/pokemon.component';
import { PointComponent } from '../../point/point.component';
import { CompetitionComponent } from '../competition/competition.component';

@Component({
    selector: 'sp-competition-page',
    templateUrl: './competition-page.component.html',
    styleUrls: ['./competition-page.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CompetitionComponent, PointComponent, PokemonComponent]
})
export class CompetitionPageComponent implements OnDestroy {

  private readonly store:Store = inject(Store);

  vm:Signal<CompetitionPageViewModel> = this.store.selectSignal(competitionPageViewModel);

  filterPokemon(event:any):void {
    this.store.dispatch(
      CompetitionActions.filter({query: event.target.value})
    );
  }

  ngOnDestroy():void {
    this.store.dispatch(CompetitionActions.clear());
  }
}
