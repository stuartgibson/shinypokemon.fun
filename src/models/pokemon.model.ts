import { AppModel, IAppModel } from "./base.model";

export interface IPokemon extends IAppModel {
  readonly dexNo:string;
  readonly generation:number;
  readonly name:string;
}

export class Pokemon extends AppModel implements IPokemon {
  readonly dexNo:string;
  readonly generation:number;
  readonly name:string;

  constructor(data:any) {
    super(data);
    this.dexNo = data.attributes.dexNo;
    this.generation = data.attributes.generation;
    this.name = data.attributes.name;
  }
}
