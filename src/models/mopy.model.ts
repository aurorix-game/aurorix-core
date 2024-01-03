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
  };

  export type LevelAttribute = {
    value: number;
    type_value: TypeValues;
  };

  export type HealthAttribute = {
    max_value: number;
    current_value: number;
    type_value: TypeValues;
  };

  export type AttackAttribute = {
    value: number;
    type_value: TypeValues;
  };

  export type DefenseAttribute = {
    value: number;
    type_value: TypeValues;
  };

  export type ExperienceAttribute = {
    max_value: number;
    current_value: number;
    type_value: TypeValues;
  };

  export type Model = {
    id: string;
    alias_name: string;
    sprite: Sprite;
    att: {
      level: LevelAttribute;
      health: HealthAttribute;
      attack: AttackAttribute;
      defense: DefenseAttribute;
      elements: Elements[];
      xp: ExperienceAttribute;
    };
  };

  export type Ability = {
    name: string;
    element: Elements;
    pp: number;
  };
}
