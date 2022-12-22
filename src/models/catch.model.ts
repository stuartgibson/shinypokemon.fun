import { AppModel, IAppModel } from "./base.model";

interface ICatch extends IAppModel {
  readonly competitionID:string;
  readonly pokemonID:string;
  readonly userID:string;
}

export class Catch extends AppModel implements ICatch {
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
