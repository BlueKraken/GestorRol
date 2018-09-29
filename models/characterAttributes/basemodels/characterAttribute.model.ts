export interface DisplaysValue {
  AttributeName: CharacterAttributeName;
  ValueToString(): string;
}

export abstract class CharacterAttribute implements DisplaysValue {
  public get AttributeName() { return this.name; }
  constructor(private name: CharacterAttributeName) { }
  public abstract ValueToString(): string
}

/** 
 * Tipo unión con los nombres para identificar a los atributos.
 * No hay garantía de que esta sea la manera necesaria para
 * identificar un atributo
 */
// FIXME: faltan (muchos) atributos
export type CharacterAttributeName = 
  'totalHealthPoints' |
  'currenthealthPoints' |
  'totalEnergy' |
  'currentEnergy' |
  'stamina' |
  'baseMorale' |
  'connectionMorale' |
  'ownMorale' |
  'luck' |
  'rolledInitiative' |
  'modifiedInitiative' |
  'actionsSpeed' |
  'advanceBoxes' |
  'energyOptionsCost' |
  'fortitude' |
  'strengthTests' |
  'reflexes' |
  'headReflexes' |
  'handsReflexes' |
  'torsoAndArmsReflexes' |
  'dexterityTests' |
  'will' |
  'intelligenceTests' |
  'clevernessAndDeduction' |
  'wisdomAndExperience' |
  'charismaEloquenceDiplomacy' |
  'detectMagic';
  