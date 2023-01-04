export interface IAppModel {
  readonly id:string;
}

export class AppModel implements IAppModel {
  readonly id:string;
  private readonly rawData:any;

  constructor(data:any) {
    this.rawData = data;
    this.id = data.id;
  }

  attribute(attribute:string):any {
    return this.rawData?.attributes?.[attribute];
  }

  relationshipID(relationship:string):string|null {
    return this.rawData?.relationships?.[relationship]?.data?.id;
  }

  relationshipIDs(relationship:string):string[] {
    return this.rawData?.relationships?.[relationship]?.map((item:any) => item.data.id) || [];
  }
}
