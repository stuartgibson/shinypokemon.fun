export interface IAppModel {
  readonly id:string;
}

export class AppModel implements IAppModel {
  readonly id:string;

  constructor(data:any) {
    this.id = data.id;
  }
}
