import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Player } from 'models/player.model';
import { Pokemon } from 'models/pokemon.model';
import { Observable } from 'rxjs';
import { selectCompetitions, selectCurrentCompetition } from 'store/selectors/competition.selectors';
import { selectPlayers } from 'store/selectors/player.selectors';
import { selectAllPokemon } from 'store/selectors/pokemon.selectors';

@Component({
  templateUrl: './generators.component.html',
  styleUrls: ['./generators.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneratorsComponent {
  allPokemon$: Observable<Pokemon[]>;
  competitions$: Observable<Competition[]>;
  currentCompetition$: Observable<Competition|null>;
  players$: Observable<Player[]>;

  active = 'points';

  constructor(
    private store:Store
  ){
    this.allPokemon$ = store.select(selectAllPokemon);
    this.competitions$ = store.select(selectCompetitions);
    this.currentCompetition$ = store.select(selectCurrentCompetition);
    this.players$ = store.select(selectPlayers);
  }
}
