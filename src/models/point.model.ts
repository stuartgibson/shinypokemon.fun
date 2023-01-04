import { BallType } from "src/types/ball.types";
import { GameType } from "src/types/game.types";
import { MethodType } from "src/types/method.types";
import { AppModel, IAppModel } from "./base.model";

interface IPoint extends IAppModel {
  readonly ball:BallType|null;
  readonly catchDate:Date|null;
  readonly competitionID:string|null;
  readonly game:GameType|null;
  readonly method:MethodType|null;
  readonly pokemonID:string|null;
  readonly playerID:string|null;
}

export class Point extends AppModel implements IPoint {
  readonly ball:BallType|null;
  readonly catchDate:Date|null;
  readonly competitionID:string|null;
  readonly game:GameType|null;
  readonly method:MethodType|null;
  readonly pokemonID:string|null;
  readonly playerID:string|null;

  constructor(data:any) {
    super(data);
    this.ball = this.attribute('ball');
    this.competitionID = this.relationshipID('competition');
    this.catchDate = this.attribute('catchDate') ? new Date(this.attribute('catchDate')) : null;
    this.game = this.attribute('game');
    this.method = this.attribute('method');
    this.pokemonID = this.relationshipID('pokemon');
    this.playerID = this.relationshipID('player');
  }
}
