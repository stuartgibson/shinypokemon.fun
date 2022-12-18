import { AppModel, IAppModel } from "./base.model";

interface ICompetition extends IAppModel{
  readonly description:string;
  readonly endDate:Date;
  readonly startDate:Date;
  readonly theme:string;
  readonly validPokemonIDs:string[];
}

export class Competition extends AppModel implements ICompetition {
  readonly description:string;
  readonly endDate:Date;
  readonly startDate:Date;
  readonly theme:string;
  readonly validPokemonIDs:string[];

  constructor(values:any) {
    super(values);
    this.description = values.description;
    this.endDate = values.endDate;
    this.startDate = values.startDate;
    this.theme = values.theme;
    this.validPokemonIDs = values.validPokemonIDs;
  }
}
