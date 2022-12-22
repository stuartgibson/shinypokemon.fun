export interface IAppModel {
  readonly id:string;
}

export class AppModel implements IAppModel {
  readonly id:string;

  constructor(data:any) {
    this.id = data.id;
  }

  relationshipID(data:any, relationship:string):string|null {
    return data?.relationships?.[relationship]?.data?.id;
  }

  relationshipIDs(data:any, relationship:string):string[] {
    return data?.relationships?.[relationship]?.map((item:any) => item.data.id) || [];
  }
}
