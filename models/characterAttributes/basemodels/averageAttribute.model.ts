import { CompoundAttribute } from "./compoundAttribute.model";
import { CharacterAttributeName } from "./characterAttribute.model";
import { NumeralAttribute } from "./numeralAttribute.model";

export class AverageAttribute extends CompoundAttribute {
  constructor(name: CharacterAttributeName) {
    super(name);
  }

  public UpdateBaseValue(characterAttributes: Array<NumeralAttribute>) {
    this.value = this.attributeDependencies
      .map(name => characterAttributes
        .find(attribute => attribute.AttributeName == name)
        .TotalValue
      )
      .reduce((acc, curr) => acc += curr) / this.attributeDependencies.length;
  }
}