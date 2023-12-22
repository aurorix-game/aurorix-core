import { TypeValues } from './type-values.model';

export namespace Mopy {
  export type Sprite = {
    url: string;
    columns: number;
    rows: number;
  };

  export enum TypeAttributes {
    HP = 'hp',
    ATTACK = 'attack',
    DEFENSE = 'defense',
    ELEMENT = 'element',
    EXP = 'exp',
  }

  export type AttributeStyle = {
    color: string;
  };

  export type Attribute = {
    label: string;
    type: TypeAttributes;
    type_value: TypeValues;
    value: number;
    style: AttributeStyle;
  };

  export type Model = {
    id: string;
    alias_name: string;
    sprite: Sprite;
    attributes: Attribute[];
  };
}
