import { ChangeDetectionStrategy, Component, inject, OnInit, Signal, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Point } from 'models/point.model';
import { Pokemon } from 'models/pokemon.model';
import { Pokemons } from 'store/reducers';
import { InlinePokemonComponent } from '../pokemon/inline-pokemon/inline-pokemon.component';
import { InlinePlayerComponent } from '../player/inline-player/inline-player.component';

@Component({
    selector: 'sp-point',
    templateUrl: './point.component.html',
    styleUrl: './point.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [InlinePlayerComponent, InlinePokemonComponent]
})
export class PointComponent implements OnInit {
  readonly point = input.required<Point>();

  private readonly store:Store = inject(Store);

  pokemon!:Signal<Pokemon|null>;

  ngOnInit():void {
    this.pokemon = this.store.selectSignal(
      Pokemons.selectByID(this.point().pokemonID)
    );
  }
}
