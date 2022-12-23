import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Point } from 'models/point.model';
import { Pokemon } from 'models/pokemon.model';
import { Observable } from 'rxjs';
import { selectRoutedCompetition } from 'store/selectors/competition.selectors';
import { selectRoutedCompetitionPoints } from 'store/selectors/points.selectors';
import { selectRoutedCompetitionPokemon } from 'store/selectors/pokemon.selectors';

@Component({
  selector: 'sp-competition-page',
  templateUrl: './competition-page.component.html',
  styleUrls: ['./competition-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionPageComponent {
  competition$: Observable<Competition|null>;
  points$: Observable<Point[]>;
  validPokemon$: Observable<Pokemon[]>;

  constructor(private store:Store) {
    this.competition$ = this.store.select(selectRoutedCompetition);
    this.points$ = this.store.select(selectRoutedCompetitionPoints);
    this.validPokemon$ = this.store.select(selectRoutedCompetitionPokemon);
  }

  trackByPokemon(index:number, pokemon:Pokemon):string {
    return pokemon.id;
  }
}
