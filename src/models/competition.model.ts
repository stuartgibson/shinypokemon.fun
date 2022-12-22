import { AppModel, IAppModel } from "./base.model";

interface ICompetition extends IAppModel{
  readonly description:string;
  readonly endDate:Date;
  readonly startDate:Date;
  readonly theme:string;
  readonly validPokemonIDs:string[];
  readonly yearID:string|null;
}

export class Competition extends AppModel implements ICompetition {
  readonly description:string;
  readonly endDate:Date;
  readonly startDate:Date;
  readonly theme:string;
  readonly validPokemonIDs:string[];
  readonly yearID:string|null;

  constructor(data:any) {
    super(data);
    this.description = data.attributes.description;
    this.endDate = new Date(data.attributes.endDate + 'T23:59:59');
    this.startDate = new Date(data.attributes.startDate);
    this.theme = data.attributes.theme;
    this.validPokemonIDs = this.relationshipIDs(data, 'validPokemon');
    this.yearID = this.relationshipID(data, 'year');
  }
}
