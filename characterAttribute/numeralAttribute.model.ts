import { CharacterAttribute, CharacterAttributeName } from "./characterAttribute.model";
import { AttributeBonification } from "./attributeBonification.model";
export class NumeralAttribute extends CharacterAttribute {
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
    this.bonifications.splice(this.bonifications.indexOf(bonification), 1);
  }
  public AddTemporalBonification(bonification: AttributeBonification) {
    this.temporalBonifications.push(bonification);
  }
  public RemoveTemporalBonification(bonification: AttributeBonification) {
    this.temporalBonifications.splice(this.temporalBonifications.indexOf(bonification), 1);
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
      .map(b => b.Value)
      .reduce((acc, curr) => acc += curr, 0);
  }
  private sumTemporalBonifications() {
    return this.temporalBonifications
      .map(b => b.Value)
      .reduce((acc, curr) => acc += curr, 0);
  }
}