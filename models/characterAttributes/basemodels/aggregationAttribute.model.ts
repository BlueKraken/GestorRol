import { NumeralAttribute } from "./numeralAttribute.model";
import { CharacterAttributeName } from "./characterAttribute.model";
import { CompoundAttribute } from "./compoundAttribute.model";

export class AggregationAttribute extends CompoundAttribute {
  constructor(name: CharacterAttributeName) {
    super(name);
  }
  public UpdateBaseValue(characterAttributes: Array<NumeralAttribute>) {
    this.value = this.attributeDependencies
      .map(name => characterAttributes
        .find(attribute => attribute.AttributeName == name)
        .TotalValue)
      .reduce((acc, curr) => acc += curr, 0);
  }
}