import { Inventory } from '../inventory/inventory.model';
import { NumeralAttribute } from '../characterAttributes/basemodels/numeralAttribute.model';
/** 
* Representa un personaje del juego, sea 
* controlado por un jugador, o no. 
*/
export class Character
{
  /** Identificador */
  private Id: string;
  /** 
   * Devuelve el nombre predefinido del
   * personaje si tiene, si no, devuelve el nombre
   */
  get Name() {
    return this.predefinedName || this.name;
  }
  /** Nombre del personaje */
  private name: string;
  /** Nombre predefinido dado por su clase especial */
  private predefinedName: string;
  /** Nombre de su clase */
  public get ClassName(): string { return this.className; }
  private className: string;
  /** Nombre de su raza */
  public get RaceName(): string { return this.raceName; }
  private raceName: string;
  /** Nivel de conexión */
  public get ConnectionLevel(): string { return this.connectionLevel; };
  private connectionLevel: string;
  /** Clases de prestigio */
  public get Prestige1(): string { return this.prestiges[0] || ''};
  public get Prestige2(): string { return this.prestiges[1] || ''};
  public prestiges: Array<string>;
  /** Atributos del personaje */
  public get CharacterAttributes() {
    return this.characterAttributes;
  };
  private characterAttributes: Array<NumeralAttribute>; 
  /** Inventario */
  public Inventory: Inventory
  // TODO: implementar puntos de personaje
  /** 
   * Crea un nuevo personaje usando los atributos
   * iniciales de la clase y raza escogida
   */
  constructor(name: string, characterClass: string, race: string) {
    //TODO: Lógica de creación

    throw 'Not implemented';
  }
}
