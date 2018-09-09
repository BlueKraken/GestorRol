import { NumeralAttribute } from "../characterAttributes/basemodels/numeralAttribute.model";
import { InformativeAttribute } from "../characterAttributes/basemodels/informativeAttribute.model";
import { CharacterAttribute, CharacterAttributeName } from "../characterAttributes/basemodels/characterAttribute.model";
import { ShamanData, AttributeFromJson } from './shamanData';
import { createAttribute } from "../characterAttributes/attributeFactory";

class CharacterClass {
  
}

class Shamman extends CharacterClass {
  public readonly Name = 'chaman';

  static initialBonifications(): Array<CharacterAttribute> {
    return Object.keys(ShamanData.initialAttributes)
      .map((name: CharacterAttributeName) => 
        createAttribute(name, ShamanData.initialAttributes[name].value)
      );
  }

  static initialRaceBonifications(raceName: string) {
    switch (raceName) {
      case 'maon':
        return 
    }
  }
}