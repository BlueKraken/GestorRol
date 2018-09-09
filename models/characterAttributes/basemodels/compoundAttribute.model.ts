import { NumeralAttribute } from "./numeralAttribute.model";
import { CharacterAttributeName } from "./characterAttribute.model";
/**
 * cómo itero sobre todos los atributos filtrando
 * si son compuesto?
 *
 * Cómo identifico que un atributo es compuesto?
 *
 * Si itero sobre todos los atributos del personaje
 * y declaro el item actual como compuesto podría tener
 * un runtime error??
 *
 * Por su nombre?? sé que atributos son compuestos por definición.
 * Podría hacer un mapa y determinar si un atributo es compuesto
 * si su nombre se encuentra en dicho mapa :eyes:
 */
export abstract class CompoundAttribute extends NumeralAttribute {
  // podría tener un accesor de las dependencias para poder
  // determinar que atributos recalcular cuando se modifica
  // X atributo
  protected attributeDependencies: Array<CharacterAttributeName>;
  constructor(name: CharacterAttributeName, value = 0) {
    super(name, value);
  }
  public abstract UpdateBaseValue(characterAttributes: Array<NumeralAttribute>): void;
}