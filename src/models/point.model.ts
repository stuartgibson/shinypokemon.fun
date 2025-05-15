import { BallType } from 'src/types/ball.types';
import { GameType } from 'src/types/game.types';
import { MethodType } from 'src/types/method.types';
import { AppModel, IAppModel } from './base.model';

interface IPoint extends IAppModel {
  readonly ball: BallType | null;
  readonly catchDate: Date;
  readonly competitionID: string;
  readonly firstCatch: boolean;
  readonly game: GameType | null;
  readonly method: MethodType | null;
  readonly notes: string | null;
  readonly pokemonID: string;
  readonly playerID: string;
  readonly oldSystemPoint?: boolean;
  readonly value?: number;
}

export class Point extends AppModel implements IPoint {
  readonly ball: BallType | null;
  readonly catchDate: Date;
  readonly competitionID: string;
  readonly firstCatch: boolean;
  readonly game: GameType | null;
  readonly method: MethodType | null;
  readonly notes: string | null;
  readonly pokemonID: string;
  readonly playerID: string;
  readonly oldSystemPoint: boolean;
  readonly value?: number;

  constructor(data: any) {
    super(data);
    this.ball = this.attribute('ball');
    this.competitionID = this.relationshipID('competition')!;
    this.catchDate = new Date(this.attribute('catchDate'));
    this.firstCatch = !!this.attribute('firstCatch');
    this.game = this.attribute('game');
    this.method = this.attribute('method');
    this.notes = this.attribute('notes') || null;
    this.pokemonID = this.relationshipID('pokemon')!;
    this.playerID = this.relationshipID('player')!;
    this.oldSystemPoint = this.attribute('oldSystemPoint') || false;
    this.value = this.attribute('value') || 1;
  }
}
