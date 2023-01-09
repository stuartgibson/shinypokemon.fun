import { AppModel, IAppModel } from "./base.model";

interface IBall extends IAppModel{
  readonly name:string;
  readonly xOffset:number;
  readonly yOffset:number;
}

export class Ball extends AppModel implements IBall {
  readonly name:string;
  readonly xOffset:number;
  readonly yOffset:number;

  constructor(data:any) {
    super(data);
    this.name = data['name'];
    this.xOffset = data['xOffset'];
    this.yOffset = data['yOffset'];
  }
}
