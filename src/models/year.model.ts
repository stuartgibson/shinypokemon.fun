import { AppModel, IAppModel } from "./base.model";

interface IYear extends IAppModel {
  readonly name:string;
}

export class Year extends AppModel implements IYear {
  readonly name:string;

  constructor(data:any) {
    super(data);
    this.name = this.attribute('name');
  }
}
