import { CharacterAttribute, CharacterAttributeName } from "./characterAttribute.model";
export class AttributeBonification extends CharacterAttribute {
  constructor(name: CharacterAttributeName, public readonly Value: number) {
    super(name);
  }
  public ValueToString() {
    return `+${this.Value}`;
  }
}