import { CharacterAttributeName, CharacterAttribute } from './basemodels/characterAttribute.model'
import { Stamina } from './stamina.model';
import { DetectMagic } from './detectMagic.model';
import { NumeralAttribute } from './basemodels/numeralAttribute.model';

export function createAttribute(attributeName: CharacterAttributeName, initialValue: number): CharacterAttribute {
  // const constructor = constructorToNameMap.find(mi => mi[0] == attributeName)[1];

  // return new constructor(initialValue);
  return new NumeralAttribute(attributeName, initialValue);
}

const constructorToNameMap: Array<DictionaryItem<CharacterAttributeName, any>> = [
  ['stamina', Stamina],
  ['detectMagic', DetectMagic],
];

interface DictionaryItem<K,V>  
{ 
  0: K, 
  1: V 
};