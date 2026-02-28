import { ChangeDetectionStrategy, Component, inject, OnInit, Signal, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Player } from 'models/player.model';
import { Players } from 'store/reducers';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'sp-inline-player',
    templateUrl: './inline-player.component.html',
    styleUrls: ['./inline-player.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink]
})
export class InlinePlayerComponent implements OnInit {
  readonly id = input.required<string | null>();

  private readonly store:Store = inject(Store);

  player!:Signal<Player|null>;

  ngOnInit():void {
    const id = this.id();
    if(!id) return;

    this.player = this.store.selectSignal(
      Players.selectByID(id)
    );
  }
}
