import { AppModel, IAppModel } from "./base.model";

export interface IPokemon extends IAppModel {
  readonly dexNo:string;
  readonly forme:string|null;
  readonly generation:number;
  readonly name:string;
}

export class Pokemon extends AppModel implements IPokemon {
  readonly dexNo:string;
  readonly forme:string|null;
  readonly generation:number;
  readonly name:string;

  constructor(data:any) {
    super(data);
    this.dexNo = this.attribute('dexNo');
    this.forme = this.attribute('forme');
    this.generation = this.attribute('generation');
    this.name = this.attribute('name');
  }
}
