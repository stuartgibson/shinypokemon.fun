import { AppModel, IAppModel } from "./base.model";

interface IPoint extends IAppModel {
  readonly competitionID:string;
  readonly pokemonID:string;
  readonly userID:string;
}

export class Point extends AppModel implements IPoint {
  readonly competitionID:string;
  readonly pokemonID:string;
  readonly userID:string;

  constructor(values:any) {
    super(values);
    this.competitionID = values.competitionID;
    this.pokemonID = values.pokemonID;
    this.userID = values.userID;
  }
}
