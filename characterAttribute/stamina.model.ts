import { NumeralAttribute } from "./numeralAttribute.model";
import { CompoundAttribute } from "./compoundAttribute.model";
export class Stamina extends CompoundAttribute {
  constructor() {
    super("stamina");
    this.attributeDependencies = ["intelligenceTests"];
  }
  public ValueToString() {
    return `+${this.TotalValue}`;
  }
  public CalculateBaseValue(characterAttributes: Array<NumeralAttribute>) {
    this.value = this.attributeDependencies
      .map(name => characterAttributes
        .find(attribute => attribute.AttributeName == name)
        .TotalValue)
      .reduce((acc, curr) => acc += curr, 0);
  }
}