import { ChangeDetectionStrategy, Component, inject, OnInit, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonStatComponent } from "../pokemon-stat/pokemon-stat.component";
import { PokemonCaughtDatum, pokemonCaughtViewModel, PokemonCaughtViewModel } from 'store/view-models/pokemon-caught.view-model';

@Component({
    selector: 'sp-most-caught',
    templateUrl: './most-caught.component.html',
    styleUrl: './most-caught.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PokemonStatComponent]
})
export class MostCaughtComponent implements OnInit{

  private readonly store: Store = inject(Store);

  pokemon!: PokemonCaughtDatum[];

  vm: Signal<PokemonCaughtViewModel> = this.store.selectSignal(
    pokemonCaughtViewModel
  );

  ngOnInit():void {
    // Sort by most caught (but ignore MissingNo)
    this.pokemon = this.vm().data
        .filter(a => a.pokemon.name != 'MissingNo')
        .sort((a,b) => b.count - a.count)
        .slice(0,10);
  }


}
