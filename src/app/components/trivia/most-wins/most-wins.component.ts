import { ChangeDetectionStrategy, Component, inject, OnInit, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonStatComponent } from "../pokemon-stat/pokemon-stat.component";
import { PokemonCaughtDatum, pokemonCaughtViewModel, PokemonCaughtViewModel } from 'store/view-models/pokemon-caught.view-model';
import { PlayerDatum, playersPageViewModel, PlayersPageViewModel } from 'store/view-models/players-page.view-model';
import { InlinePlayerComponent } from "../../player/inline-player/inline-player.component";

@Component({
    selector: 'sp-most-wins',
    templateUrl: './most-wins.component.html',
    styleUrl: './most-wins.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PokemonStatComponent, InlinePlayerComponent]
})
export class MostWinsComponent implements OnInit{

  private readonly store: Store = inject(Store);

  players!: PlayerDatum[];

  vm: Signal<PlayersPageViewModel> = this.store.selectSignal(
    playersPageViewModel
  );

  ngOnInit():void {
    // Sort by most wins, top 10
    this.players = this.vm().playersData
        .sort((a,b) => b.totalWins - a.totalWins)
        .slice(0,10);
  }


}
