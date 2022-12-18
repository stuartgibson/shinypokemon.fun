interface IYear extends IAppModel {
  readonly name:string;
  readonly competitionIDs:string[];
}

class Year extends AppModel implements IYear {
  readonly name:string;
  readonly competitionIDs: string[];

  constructor(values:any) {
    super(values);
    this.name = values.name;
    this.competitionIDs = values.competitionIDs;
  }
}
