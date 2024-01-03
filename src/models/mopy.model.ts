import { Elements } from './elements.model';
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

  export type Ability = {
    name: string;
    element: Elements;
    pp: number;
  };
}
