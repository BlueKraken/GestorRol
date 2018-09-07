import { CompoundAttribute } from "./basemodels/compoundAttribute.model";
import { NumeralAttribute } from "./basemodels/numeralAttribute.model";
/** Aguante */
export class Stamina extends CompoundAttribute {
  constructor() {
    super("stamina");
    this.attributeDependencies = ["intelligenceTests"];
  }
  public ValueToString() {
    return `+${this.TotalValue}`;
  }
  public UpdateBaseValue(characterAttributes: Array<NumeralAttribute>) {
    this.value = characterAttributes
        .find(attribute => attribute.AttributeName == this.attributeDependencies[0]) // tengo por seguro que aguante siempre va a depender de 1 atributo
        .TotalValue * 4;
  }
}