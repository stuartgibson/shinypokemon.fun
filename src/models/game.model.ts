import { AppModel, IAppModel } from "./base.model";

interface IGame extends IAppModel{
  readonly name:string;
}

export class Game extends AppModel implements IGame {
  readonly name:string;

  constructor(data:any) {
    super(data);
    this.name = data['name'];
  }
}
