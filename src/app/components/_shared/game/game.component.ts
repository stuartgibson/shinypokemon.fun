import { ChangeDetectionStrategy, Component, OnChanges, SimpleChanges, input } from '@angular/core';
import { Game } from 'models/game.model';
import { getGame } from 'src/app/helpers/games.helper';
import { GameType } from 'types/game.types';

@Component({
    selector: 'sp-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnChanges {
  readonly gameType = input<GameType | null>(null);

  game:Game|null = null;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const gameType = this.gameType();
    if( gameType ) {
      this.game = getGame(gameType);
    } else {
      this.game = null;
    }
  }
}
