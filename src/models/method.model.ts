import { AppModel, IAppModel } from "./base.model";

interface IMethod extends IAppModel{
  readonly name:string;
}

export class Method extends AppModel implements IMethod {
  readonly name:string;

  constructor(data:any) {
    super(data);
    this.name = data['name'];
  }
}
