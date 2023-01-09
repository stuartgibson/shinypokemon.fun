import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
  @Input() gameType:GameType|null = null;

  game:Game|null = null;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if( this.gameType ) {
      this.game = getGame(this.gameType);
    } else {
      this.game = null;
    }
  }
}
