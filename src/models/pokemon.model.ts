import { AppModel, IAppModel } from "./base.model";

export interface IPokemon extends IAppModel {
  readonly artwork:string;
  readonly dexNo:string;
  readonly forme:string|null;
  readonly generation:number;
  readonly name:string;
  readonly serebiiLink:string;
  readonly bulbapediaLink:string;
}

export class Pokemon extends AppModel implements IPokemon {
  readonly artwork:string;
  readonly dexNo:string;
  readonly forme:string|null;
  readonly generation:number;
  readonly name:string;
  readonly serebiiLink:string;
  readonly bulbapediaLink:string;

  constructor(data:any) {
    super(data);
    this.dexNo = this.attribute('dexNo');
    this.forme = this.attribute('forme');
    this.generation = this.attribute('generation');
    this.name = this.attribute('name');

    this.artwork = `url('/assets/images/pokemon/shiny-artwork/${this.dexNo}${!!this.forme ? ('-' + this.forme) : ''}.png')`;
    this.serebiiLink = `https://serebii.net/pokemon/${this.formatNameForSerebiiLink()}/`
    this.bulbapediaLink = `https://bulbapedia.bulbagarden.net/wiki/${this.formatNameForBulbapediaLink()}`
  }

  private formatNameForSerebiiLink():string {
    return this
      .name
      .toLowerCase()
      .replace(/ /g, '')
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  private formatNameForBulbapediaLink():string {
    return `${this.name}_(Pok%C3%A9mon)`;
  }
}
