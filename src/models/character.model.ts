import { TypeValues } from './type-values.model';

export namespace Character {
  export type Sprite = {
    url: string;
    columns: number;
    rows: number;
  };

  export enum TypeAttributes {
    MOPY_CAPTURE = 'mopy-capture',
    EXPERTISE = 'expertise',
    ELEMENT_TUNNING_FIRE = 'element-tunning-fire',
    ELEMENT_TUNNING_WATER = 'element-tunning-water',
    ELEMENT_TUNNING_SHADOW = 'element-tunning-shadow',
    ELEMENT_TUNNING_GRASS = 'element-tunning-grass',
  }

  export type MopyCaptureAttribute = {
    type: TypeAttributes;
    value: number;
    type_value: TypeValues;
  };

  export type ExpertiseAttribute = {
    type: TypeAttributes;
    value: number;
    type_value: TypeValues;
  };

  export type ElementTunningAttribute = {
    type: TypeAttributes;
    value: number;
    type_value: TypeValues;
  };

  export type Model = {
    id: string;
    alias_name: string;
    sprite: Sprite;
    att: {
      mopy_capture: MopyCaptureAttribute;
      expertise: MopyCaptureAttribute;
    };
    element_tunning: ElementTunningAttribute[];
  };
}
