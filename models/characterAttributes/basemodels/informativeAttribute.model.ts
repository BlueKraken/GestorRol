import { CharacterAttribute, CharacterAttributeName } from "./characterAttribute.model";

export class InformativeAttribute extends CharacterAttribute {
  constructor(name: CharacterAttributeName, private value: string) {
    super(name);
  }
  public ValueToString() {
    return this.value;
  }
}