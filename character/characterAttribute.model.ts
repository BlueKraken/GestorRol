/** 
 * Representa un atributo del personaque que posee la 
 * capacidad de almacenar un atributo temporal mediante
 * talentos o empuñables y aumentar según una condición.
 */
export class CharacterAttribute implements Bonification {
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

/** Representa la bonificación extra de un atributo según una condición */
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