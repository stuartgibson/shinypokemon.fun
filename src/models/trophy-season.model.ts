import { AppModel, IAppModel } from './base.model';

interface ITrophySeason extends IAppModel {
  readonly name: string;
}

export class TrophySeason extends AppModel implements ITrophySeason {
  readonly name: string;

  constructor(data: any) {
    super(data);
    this.name = this.attribute('name');
  }
}
