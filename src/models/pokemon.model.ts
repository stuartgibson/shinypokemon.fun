interface IPokemon extends IAppModel {
  readonly name:string;
}

class Pokemon extends AppModel implements IPokemon {
  readonly name:string;

  constructor(values:any) {
    super(values);
    this.name = values.name;
  }
}
