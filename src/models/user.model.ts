interface IUser extends IAppModel {
  readonly name:string;
}

class User extends AppModel implements IUser {
  readonly name:string;

  constructor(values:any){
    super(values);
    this.name = values.name;
  }
}
