import { CharacterAttribute, CharacterAttributeName } from "./characterAttribute.model";

export class AttributeBonification extends CharacterAttribute {
  constructor(name: CharacterAttributeName, public readonly Value: number) {
    super(name);
  }
  public ValueToString() {
    return `+${this.Value}`;
  }
}

export class ConditionalBonification extends AttributeBonification {
  

  constructor(
    name: CharacterAttributeName, 
    value: number,
    private conditionType: string,
    private conditionDependency: CharacterAttributeName,
    private conditionThresHold: number,
  ) {
      super(name, value)
  }

  /** Checks if bonification is active */
  private isActive(): boolean {
    throw '';
  }
}