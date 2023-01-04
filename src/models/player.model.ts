import { AppModel, IAppModel } from "./base.model";

interface IPlayer extends IAppModel {
  readonly displayName:string;
  readonly formattedName:string;
  readonly realName:string;
}

export class Player extends AppModel implements IPlayer {
  readonly displayName:string;
  readonly formattedName:string;
  readonly realName:string;

  constructor(data:any){
    super(data);
    this.displayName = this.attribute('displayName');
    this.realName = this.attribute('realName');

    this.formattedName = `${ this.realName } (@${ this.displayName })`;
  }
}
