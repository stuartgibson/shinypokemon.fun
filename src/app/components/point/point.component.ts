import { ChangeDetectionStrategy, Component, inject, Input, OnInit, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Point } from 'models/point.model';
import { Pokemon } from 'models/pokemon.model';
import { Pokemons } from 'store/reducers';

@Component({
  selector: 'sp-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PointComponent implements OnInit {
  @Input() point!: Point;

  private readonly store:Store = inject(Store);

  pokemon!:Signal<Pokemon|null>;

  ngOnInit():void {
    this.pokemon = this.store.selectSignal(
      Pokemons.selectByID(this.point.pokemonID)
    );
  }
}
