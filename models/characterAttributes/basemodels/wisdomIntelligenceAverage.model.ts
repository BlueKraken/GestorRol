import { AverageAttribute } from "./averageAttribute.model";
import { CharacterAttributeName } from "./characterAttribute.model";

export class WisdomIntelligenceAverage extends AverageAttribute{
  constructor(name: CharacterAttributeName) {
    super(name);
    this.attributeDependencies = ["wisdomAndExperience", "intelligenceTests"];
  }
}