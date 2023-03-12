export type ModelType = 'competition' | 'point' | 'pokemon' | 'player' | 'year';

export interface IJsonApiRelationship {
  data: {
    id: string;
    type: string;
  }
}

export interface IJsonApiRelationships {
  [key:string]: IJsonApiRelationship|IJsonApiRelationship[]
}

export interface IJsonApiEntity {
  data: {
    type: ModelType;
    id: string;
    attributes: {
      [key:string]: any;
    };
    relationships?: {
      [key:string]: IJsonApiRelationship|IJsonApiRelationship[]
    }
  }
}
