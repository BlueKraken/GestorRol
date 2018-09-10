import { CharacterAttribute, CharacterAttributeName } from "../characterAttributes/basemodels/characterAttribute.model";
import { ShamanData, AttributeFromJson } from './shamanData';
import { createAttribute } from "../characterAttributes/attributeFactory";

class CharacterClass {
  
}

export class Shaman extends CharacterClass {
  public readonly Name = 'chaman';

  static initialBonifications(): Array<CharacterAttribute> {
    return initializeAttributes(ShamanData.initialAttributes);
  }

  static initialRaceBonifications(raceName: 'maon' | 'mediano') {
    return initializeAttributes(ShamanData.initialRaceAttributes[raceName].attributes);
  }
}

function initializeAttributes(sourceData: Array<AttributeFromJson>) {
  return sourceData.map((a: AttributeFromJson) => 
    createAttribute(a.name as CharacterAttributeName, a.value)
  );
}