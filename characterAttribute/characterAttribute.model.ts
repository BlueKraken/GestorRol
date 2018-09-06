interface DisplaysValue {
  AttributeName: string;
  ValueToString(): string;
}

abstract class CharacterAttribute implements DisplaysValue {
  public get AttributeName() { return this.name; }
  constructor(private name: CharacterAttributeName) { }
  public abstract ValueToString(): string
}

class InformativeAttribute extends CharacterAttribute {
  constructor(
    name: CharacterAttributeName, 
    private value: string
  ) {
    super(name);
  }
  public ValueToString() {
    return this.value;
  }
}

export class NumeralAttribute extends CharacterAttribute {
  // Fixme: 
  public get TotalValue() {
    return this.value 
      + this.calculateTotalBonificationValue();
  }
  protected bonifications: Array<AttributeBonification> = [];
  
  constructor(name: CharacterAttributeName, protected value: number) {
    super(name);
  }
  public AddBonification(bonification: AttributeBonification) {
    this.bonifications.push(bonification);
  }
  public RemoveBonification(bonification: AttributeBonification) {
    this.bonifications.splice(
      this.bonifications.indexOf(bonification), 1
    );    
  }
  public ValueToString() {
    return `+${this.TotalValue}`;
  }
  private calculateTotalBonificationValue() {
    return this.bonifications
      .map( b => b.Value )
      .reduce( (acc, curr) => acc += curr, 0 );
  }
}

class AttributeWithTemporalBonifications extends NumeralAttribute {
  private temporalBonifications: Array<AttributeBonification> = [];
  
  constructor(name: CharacterAttributeName,value: number) {
    super(name, value);
  }
  
  public ValueToString() {
    let valueToString = `+${this.TotalValue}`;
    
    if(this.temporalBonifications.length > 0) {
      valueToString += '(constante), ' 
      + `+${this.calculateTemporalsTotalValue()}`
      + '(temporal)';
    }
    return valueToString; 
  }
  private calculateTemporalsTotalValue() {
    return this.temporalBonifications
      .map(t => t.Value)
      .reduce((acc, curr) => acc += curr, 0);
  }
  public AddTemporalBonification(bonification: AttributeBonification) { }
  public RemoveTemporalBonification(bonification: AttributeBonification) { }
}

/** pregunta: 
 * cómo itero sobre todos los atributos filtrando
 * si son compuesto?
 * 
 * Cómo identifico que un atributo es compuesto?
 * 
 * Si itero sobre todos los atributos del personaje
 * y declaro el item actual como compuesto podría tener
 * un runtime error??
 * 
 * Por su nombre?? sé que atributos son compuestos por definición.
 * Podría hacer un mapa y determinar si un atributo es compuesto
 * si su nombre se encuentra en dicho mapa 
 */ 
class CompoundAttribute extends NumeralAttribute {
  // podría tener un accesor de las dependencias para poder
  // determinar que atributos recalcular cuando se modifica
  // X atributo
  protected attributeDependencies: Array<CharacterAttributeName>;
  
  constructor(name: CharacterAttributeName) {
    super(name, 0);
  }
}

export class Stamina extends CompoundAttribute {
  constructor() {
    super("stamina");
    this.attributeDependencies = ["intelligenceTests"];
  }
  
  public ValueToString() {
    return `+${this.TotalValue}`
  }
  public CalculateBaseValue(characterAttributes: Array<NumeralAttribute>) {
    this.value = this.attributeDependencies
      .map(name => characterAttributes
        .find(attribute => attribute.AttributeName == name)
        .TotalValue
      )
      .reduce((acc, curr) => acc += curr, 0);
  }
}

export class AttributeBonification extends CharacterAttribute {
  constructor(name: CharacterAttributeName, public readonly Value: number) {
    super(name);
  }
  public ValueToString() {
    return `+${this.Value}`;
  }
}

type CharacterAttributeName = 
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
  