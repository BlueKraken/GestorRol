import { Inventory } from '../inventory/inventory.model';
import { CharacterAttribute } from '../characterAttribute/characterAttribute.model';
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
  public ClassName: string;
  /** Nombre de su raza */
  public RaceName: string;
  /** Nivel de conexión */
  public ConnectionLevel: number;
  /** Clase de prestigio/oficio */
  public JobOrPrestige: string;
  /** Vida total */
  private totalHealthPoints: number;
  /** Devuelve la vida total del personaje */
  public get TotalHealthPoints() {
    return this.totalHealthPoints;
  }
  /** 
   * Actualiza la vida total del personaje y
   * su vida actual proporcionalmente.
   */
  public set TotalHealthPoints(value: number) {
    this.HealthPoints *= value / this.totalHealthPoints;
    this.totalHealthPoints = value;
  }
  /** Vida actual */
  public HealthPoints: number;
  /** Vida total */
  public TotalEnergy: number;
  /** Aguante */
  public Stamina: number;
  //#region Atributos modificadores
  /** Moral base */
  public BaseMorale: CharacterAttribute;
  /** Moral por subida de nivel */
  public ConnectionMorale: CharacterAttribute;
  /** Moral propia */
  public get OwnMorale(): number {
    return this.BaseMorale.Value 
      + this.ConnectionMorale.Value;
  };
  /** Suerte */
  public Luck: CharacterAttribute;
  /** Iniciativa tirada */
  public RolledInitiative: CharacterAttribute;
  /** Valor modificado de iniciativa */
  public get ModifiedInitiative(): CharacterAttribute {
    return CharacterAttribute.ComposeAttributes(
      this.RolledInitiative,
      this.IntelligenceTests,
      this.CharismaEloquenceDiplomacy
    );
  };
  //#endregion
  //#region Características de clase
  /** Rapidez de acciones */
  public ActionsSpeed: number;
  /** Casillas avanzadas */
  public AdvanceBoxes: CharacterAttribute;
  /** Opciones de coste de energía */
  public EnergyOptionsCost: string;
  //#endregion
  //#region Tiros y pruebas de salvación
  /** Fortaleza */
  public Fortitude: CharacterAttribute;
  /** Pruebas de fuerza */
  public StrengthTests: CharacterAttribute;
  /** 
   * Reflejos TODO: a reflejos en manos, cabeza, y torso y brazos deben
   * sumarles la bonificación de reflejos
  */
  public Reflexes: CharacterAttribute;
  public HeadReflexes: CharacterAttribute;
  public HandsReflexes: CharacterAttribute;
  public TorsoAndArmsReflexes: CharacterAttribute;
  /** Pruebas de destreza */
  public DexterityTests: CharacterAttribute;
  /** Voluntad */
  public Will: CharacterAttribute;
  /** Pruebas de inteligencia */
  public IntelligenceTests: CharacterAttribute;
  //#endregion
  //#region Habilidades sociales
  /** Astucia y deducción */
  public ClevernessAndDeduction: CharacterAttribute;
  /** Conocimiento y experiencia */
  public WisdomAndExperience: CharacterAttribute;
  /** Carisma, elocuencia y diplomacia */
  public CharismaEloquenceDiplomacy: CharacterAttribute;
  //#endregion
  //#region  Atributos secundarios
  /** Promedio conocimiento/experiencia y pruebas de inteligencia */
  private get wisdomIntelligenceAverage(): number {
    const average = (this.WisdomAndExperience.Value 
      + this.IntelligenceTests.Value) / 2;
    return Math.round(average);
  }
  /** Detectar magia */
  public get DetectMagic(): number {
    return this.wisdomIntelligenceAverage;
  }
  /** Detectar inmunidades, fortalezas y debilidades */
  public get DetectInmunitiesFortitudesAndWeakness(): number {
    return this.wisdomIntelligenceAverage;
  }
  /** Descifrar escritura */
  public get Deciphertext(): number {
    return this.wisdomIntelligenceAverage;
  }
  /** Buscar */
  public get Search(): number {
    const average = (this.Luck.Value 
      + this.ClevernessAndDeduction.Value) / 2;
    return Math.round(average);
  }
  /** Sigilo */
  public get Stealth(): number {
    const average = (this.DexterityTests.Value 
      + this.ClevernessAndDeduction.Value) / 2;
    return Math.round(average);
  }
  /** Averiguar intenciones */
  public get FindOutIntentions(): number {
    return this.ClevernessAndDeduction.Value;
  }
  //#endregion 
  /** Inventario */
  public Inventory: Inventory
  /** 
   * Crea un nuevo personaje usando los atributos
   * iniciales de la clase y raza escogida
   */
  constructor(name: string, characterClass: string, race: string) {
    //TODO: Lógica de creación
    throw 'Not implemented';
  }
}
