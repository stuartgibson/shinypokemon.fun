import { ChangeDetectionStrategy, Component, inject, OnInit, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonStatComponent } from "../pokemon-stat/pokemon-stat.component";
import { PokemonCaughtDatum, pokemonCaughtViewModel, PokemonCaughtViewModel } from 'store/view-models/pokemon-caught.view-model';

@Component({
    selector: 'sp-not-caught',
    templateUrl: './not-caught.component.html',
    styleUrls: ['./not-caught.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [PokemonStatComponent]
})
export class NotCaughtComponent implements OnInit{

  private readonly store: Store = inject(Store);

  pokemon!: PokemonCaughtDatum[];

  vm: Signal<PokemonCaughtViewModel> = this.store.selectSignal(
    pokemonCaughtViewModel
  );

  ngOnInit():void {
    // Sort by most caught (but ignore MissingNo)
    this.pokemon = this.vm().data
        .filter(a => a.count == 0)
        .sort((a,b) => parseInt(a.pokemon.dexNo,10) - parseInt(b.pokemon.dexNo,10))
  }


}
