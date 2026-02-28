import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Player } from 'models/player.model';
import { Pokemon } from 'models/pokemon.model';
import { Players, Pokemons } from 'store/reducers';
import { Competitions } from 'store/reducers/competitions.reducer';
import { PokemonListGeneratorComponent } from '../pokemon-list-generator/pokemon-list-generator.component';
import { CompetitionGeneratorComponent } from '../competition-generator/competition-generator.component';
import { PointsGeneratorComponent } from '../points-generator/points-generator.component';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: './generators.component.html',
    styleUrl: './generators.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, PointsGeneratorComponent, CompetitionGeneratorComponent, PokemonListGeneratorComponent, NgbNavOutlet]
})
export class GeneratorsComponent {

  private readonly store:Store = inject(Store);

  readonly allPokemon:Signal<Pokemon[]> = this.store.selectSignal(Pokemons.selectAll);
  readonly competitions:Signal<Competition[]> = this.store.selectSignal(Competitions.selectAll);
  readonly currentCompetition:Signal<Competition|null> = this.store.selectSignal(Competitions.selectCurrentCompetition);
  readonly players:Signal<Player[]> = this.store.selectSignal(Players.selectAll);

  active = 'points';
}
