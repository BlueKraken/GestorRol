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
  constructor(name: CharacterAttributeName, private value: string) {
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
      + this.sumConstantBonifications()
      + this.sumTemporalBonifications();
  }
  private get constantValue() {
    return this.value + this.sumConstantBonifications();
  }
  private bonifications: Array<AttributeBonification> = [];
  private temporalBonifications: Array<AttributeBonification> = [];

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
  public AddTemporalBonification(bonification: AttributeBonification) {
    this.temporalBonifications.push(bonification)
  }
  public RemoveTemporalBonification(bonification: AttributeBonification) {
    this.temporalBonifications.splice(
      this.temporalBonifications.indexOf(bonification), 1
    );
  }
  public ValueToString() {
    let constantValue = `+${this.constantValue}`;
    let temporalValue = this.sumTemporalBonifications();

    if (temporalValue > 0) {
      constantValue += ` (constante), +${temporalValue} (temporal)`;
    }

    return constantValue;
  }
  private sumConstantBonifications() {
    return this.bonifications
      .map( b => b.Value )
      .reduce( (acc, curr) => acc += curr, 0 );
  }
  private sumTemporalBonifications() {
    return this.temporalBonifications
      .map( b => b.Value )
      .reduce( (acc, curr) => acc += curr, 0 );
  }
}

/**
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
 * si su nombre se encuentra en dicho mapa :eyes:
 */ 
abstract class CompoundAttribute extends NumeralAttribute {
  // podría tener un accesor de las dependencias para poder
  // determinar que atributos recalcular cuando se modifica
  // X atributo
  protected attributeDependencies: Array<CharacterAttributeName>;
  
  constructor(name: CharacterAttributeName) {
    super(name, 0);
  }

  public abstract CalculateBaseValue(
    characterAttributes: Array<NumeralAttribute>
  ): void;
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
  