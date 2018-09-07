export interface DisplaysValue {
  AttributeName: CharacterAttributeName;
  ValueToString(): string;
}

export abstract class CharacterAttribute implements DisplaysValue {
  public get AttributeName() { return this.name; }
  constructor(private name: CharacterAttributeName) { }
  public abstract ValueToString(): string
}

export type CharacterAttributeName = 
  'totalHealthPoints' |
  'healthPoints' |
  'totalEnergy' |
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
  'charismaEloquenceDiplomacy';
  