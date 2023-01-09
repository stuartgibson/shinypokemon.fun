import { AppModel, IAppModel } from "./base.model";

interface IBall extends IAppModel{
  readonly name:string;
}

export class Ball extends AppModel implements IBall {
  readonly name:string;

  constructor(data:any) {
    super(data);
    this.name = data['name'];
  }
}
