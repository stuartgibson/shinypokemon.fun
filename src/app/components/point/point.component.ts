import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Point } from 'models/point.model';
import { Pokemon } from 'models/pokemon.model';
import { Observable } from 'rxjs';
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

  pokemon$!:Observable<Pokemon|null>;

  ngOnInit():void {
    this.pokemon$ = this.store.select(
      Pokemons.selectByID(this.point.pokemonID)
    );
  }
}
