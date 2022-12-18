export interface IAppModel {
  readonly id:string;
}

export class AppModel implements IAppModel {
  readonly id:string;

  constructor(values:any) {
    this.id = values.id;
  }
}
