import { ChangeDetectionStrategy, Component, inject, OnInit, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonStatComponent } from "../pokemon-stat/pokemon-stat.component";
import { PokemonCaughtDatum, pokemonCaughtViewModel, PokemonCaughtViewModel } from 'store/view-models/pokemon-caught.view-model';
import { PlayerDatum, playersPageViewModel, PlayersPageViewModel } from 'store/view-models/players-page.view-model';
import { InlinePlayerComponent } from "../../player/inline-player/inline-player.component";

@Component({
    selector: 'sp-most-points',
    templateUrl: './most-points.component.html',
    styleUrls: ['./most-points.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [InlinePlayerComponent]
})
export class MostPointsComponent implements OnInit {

  private readonly store: Store = inject(Store);

  players!: PlayerDatum[];

  vm: Signal<PlayersPageViewModel> = this.store.selectSignal(
    playersPageViewModel
  );

  ngOnInit():void {
    // Sort by most points, top 10
    this.players = this.vm().playersData
        .sort((a,b) => b.totalPoints - a.totalPoints)
        .slice(0,10);
  }


}
