/** Representa la estructura de una bonificación base de  */
class BaseBonification {
  public get BaseValue() { return this.baseValue; }

  constructor(private baseValue: number) { }
}

/**
 * Representa un atributo que depende de una
 * condición, como bonificaciones por mano vacía.
 */
class ConditionalBonification extends BaseBonification {
  constructor(value:number) {
    super(value);
  }
}

/** Representa un atributo base de personaje */
class BaseAttribute extends BaseBonification {
  public get AttributeName() { return this.name; }
  public get TotalValue() {
    return this.constantBonifications.reduce
  }

  public get
  private constantBonifications: Array<BaseBonification>;
  private temporalBonifications: Array<BaseBonification>;
  private conditionalBonifications: Array<ConditionalBonification>;

  constructor(value: number, private name: CharacterAttributeName) {
    super(value);
  }

  /** Agrega una bonificación constante al atributo */
  public AddConstantBonification(bonification: BaseBonification) {
    this.constantBonifications.push(bonification);
  }
  /** Agrega una bonificación temporal al atributo */
  public AddTemporalBonification(bonification: BaseBonification) {
    this.temporalBonifications.push(bonification);
  }
  /** Agrega una bonificación por condición del atributo  */
  public AddConditionalBonification(bonification: ConditionalBonification) {
    this.conditionalBonifications.push(bonification);
  }
  /** Elimina una bonificación constante al atributo */
  public RemoveConstantBonification(bonification: BaseBonification) {
    this.constantBonifications.splice(
      this.constantBonifications.indexOf(bonification), 1
    );
  }
  /** Elimina una bonificación temporal al atributo */
  public RemoveTemporalBonification(bonification: BaseBonification) {
    this.temporalBonifications.splice(
      this.temporalBonifications.indexOf(bonification), 1
    );
  }
  /** Elimina una bonificación por condición del atributo  */
  public RemoveConditionalBonification(bonification: ConditionalBonification) {
    this.conditionalBonifications.splice(
      this.conditionalBonifications.indexOf(bonification), 1
    );
  }
    

}

/** Atributo compuesto */
class CompoundAttribute extends BaseAttribute {

  public get Value() {

  }

  constructor(
    name: CharacterAttributeName, 
    private dependencies: Array<CharacterAttributeName>) {
    super(0, name)
  }

}

/** 
 * Representa un atributo del personaque que posee la 
 * capacidad de almacenar un atributo temporal mediante
 * talentos o empuñables y aumentar según una condición.
 */
export class CharacterAttribute implements Bonification {
  /** Nombre del atributo */
  public Name: CharacterAttributeName;
  /** Valor total */
  public get Value(): number {
    return this.baseValue 
      + this.temporalValue
      + this.extraBonification.Value;
  }
  /** Representación textual del atributo */
  public ToString() {
    const s = `+${this.baseValue +this.extraBonification.Value}`;
    if(this.temporalValue != 0) {
      s.concat(` (constante), +${this.temporalValue} (temporal)`);
    }
    return s;
  }
  /** Representación de la bonificación extra  */
  private extraBonification: ExtraBonification;
  /** Valor constante */
  private baseValue: number;
  /** Valor temporal */
  private temporalValue: number;

  constructor(baseValue: number,
    temporalValue: number = 0,
    extraBonification: ExtraBonification = undefined)
  {
    this.baseValue = baseValue;
    this.temporalValue = temporalValue;
    this.extraBonification = extraBonification;
  }

  /** 
   * Compone un nuevo objeto CharacterAttribute 
   * sumando los valores base y valores temporales
   * de los atributos dados
   */
  public static ComposeAttributes(
    ...attributes: Array<CharacterAttribute>
  ) {
    const baseValue = attributes
      .map(a => a.baseValue)
      .reduce((acc, curr) => acc += curr);

    const temporalValue = attributes
      .map(a => a.temporalValue)
      .reduce((acc, curr) => acc += curr);

    return new CharacterAttribute(baseValue, temporalValue);
  }
}

/** 
 * Representa la bonificación extra de un atributo según una condición
 * WIP
 */
class ExtraBonification implements Bonification {
  /** Valor de la bonificación extra */
  public get Value(): number{
    return this.valueByCondition();
  }
  /** Posibles valores de la bonificación */
  private posibleValues: Array<number>;
  /** Representación textual de la condición */
  private conditionString: string;
  public ToString() {
    return `+${this.Value} ${this.conditionString}`;
  }
  /** 
   * Devuelve el valor, dentro de los posibles,
   * según la condición de la bonificación. Si la
   * condición no se cumple, devuelve 0.
   */
  private valueByCondition() {
    const index = 0 // Some function should give the index
    return this.posibleValues[index];
  }
  private conditionMet(): boolean {
    return true;
  }

}

interface Bonification {
  Value: number;
  ToString(): string;
}

// NO DEBERÍA USARLO
// Basta con llamar a this.name en 
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