import { ChangeDetectionStrategy, Component, inject, Input, OnInit, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Player } from 'models/player.model';
import { Players } from 'store/reducers';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'sp-inline-player',
    templateUrl: './inline-player.component.html',
    styleUrls: ['./inline-player.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterLink]
})
export class InlinePlayerComponent implements OnInit {
  @Input() id!:string|null;

  private readonly store:Store = inject(Store);

  player!:Signal<Player|null>;

  ngOnInit():void {
    if(!this.id) return;

    this.player = this.store.selectSignal(
      Players.selectByID(this.id)
    );
  }
}
