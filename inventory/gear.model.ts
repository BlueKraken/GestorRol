import { WieldableItem } from '../item/models/wieldableItem.model';
import { EquipableItem } from '../item/models/equipableItem.model';
import { ConsumibleItem } from '../item/models/consumibleItem.model';
import { EquipableItemSlot } from '../item/commons/equipableItemSlot';
/** Representa el equipo de un personaje */
export class Gear {
  /** Armas, pueden equiparse hasta 8 armas */
  public Weapons: Array<WieldableItem> = [];
  /** 
   * Arma en mano, puede sólo existir una? creo que no 
   * FIXME: preguntar lol 
   * */
  public get WieldedWeapon() {
    return this.Weapons.filter(w => w.IsWielded)[0];
  }
  /** Escudos, pueden equiparse hasta 2 escudos */
  public Shields: Array<WieldableItem> = [];
  /** Escudo en mano */
  public get WieldedShield() {
    return this.Shields.filter(s => s.IsWielded)[0];
  }
  /** Objeto equipado en cabeza */
  public Head: EquipableItem;
  /** Objeto equipado en cuerpo */
  public Body: EquipableItem;
  /** Objeto equipado en manos */
  public Hands: EquipableItem;
  /** Objeto equipado en pies */
  public Feets: EquipableItem;
  /** 
   * Joyas, pueden equiparse hasta 2, excepto
   * que el personaje sea un monje con el talento
   * 'Trascendencia del alma' */
  public Jewels: Array<EquipableItem> = [];
  public Talisman: EquipableItem;
  /** Consumibles, cantidad ilimitada */
  public Consumibles: Array<ConsumibleItem> = [];

  constructor() { }
  /** 
   * Equipa el objeto entregado. Si el espacio para el objeto se
   * encuentra lleno, retorna el ítem del espacio, o el último ítem
   * del espacio si este es una colección
   */
  public EquipItem(item: EquipableItem): EquipableItem | void {
    let residual;
    switch (item.Slot) {
      case EquipableItemSlot.Consumible:
        this.Consumibles.push(item as ConsumibleItem);
        break;
      case EquipableItemSlot.Weapons:
        if (this.Weapons.length == 8) {
          residual = this.Weapons.pop();
          residual.UnWield();
        }
        this.Weapons.push(item as WieldableItem);
        break;
      case EquipableItemSlot.Shields:
        if (this.Shields.length == 2) {
          residual = this.Shields.pop();
          residual.UnWield();
        }
        this.Shields.push(item as WieldableItem);
        break;
      case EquipableItemSlot.Head:
        if (this.Head) {
          residual = this.Head;
        }
        this.Head = item;
        break;
      case EquipableItemSlot.Body:
        if (this.Body) {
          residual = this.Body;
        };
        this.Body = item;
        break;
      case EquipableItemSlot.Hands:
        if (this.Hands) {
          residual = this.Hands;
        }
        this.Hands = item;
        break;
      case EquipableItemSlot.Feets:
        if (this.Feets) {
          residual = this.Feets;
        }
        this.Feets = item;
        break;
      case EquipableItemSlot.Jewels:
      // TODO: change false with 'HasSoulTrascendenceTalent' handler
        const max = false ? 5 : 2
        if (this.Jewels.length == max) {
          residual = this.Jewels.pop();
        }
        this.Jewels.push(item);
        break;
      case EquipableItemSlot.Talisman:
        if (this.Talisman) {
          residual = this.Talisman;
        }
        this.Talisman = item;
        break;
      default:
        throw {
          message: `Exception occurred trying to `
            + `equip item with slot ${item.Slot}`,
          item
        };
    }
    if (residual) {
      return residual;
    }
  }
  //#region Métodos para desequipar objetos según su tipo
  public UnEquipWeapon(index: number): WieldableItem {
    const weapon = this.Weapons.splice(index)[0];
    weapon.UnWield();
    return weapon;
  }
  public UnEquipShield(index: number): WieldableItem {
    const shield = this.Shields.splice(index)[0];
    shield.UnWield();
    return shield;
  }
  public UnEquipArmor(type: EquipableItemSlot): EquipableItem {
    //FIXME: debe haber una mejor manera de hacer esto...
    switch (type) {
      case EquipableItemSlot.Head: {
        const armorItem = this.Head;
        this.Head = undefined;
        return armorItem;
      }
      case EquipableItemSlot.Body: {
        const armorItem = this.Body;
        this.Body = undefined;
        return armorItem;
      }
      case EquipableItemSlot.Hands: {
        const armorItem = this.Hands;
        this.Hands = undefined;
        return armorItem;
      }
      case EquipableItemSlot.Feets: {
        const armorItem = this.Feets;
        this.Feets = undefined;
        return armorItem;
      }
      default:
        throw `Invalid type '${type}' in UnEquipArmor`;
    }
  }
  public UnEquipJewel(index: number): EquipableItem {
    return this.Jewels.splice(index)[0];
  }
  public UnEquipTalisman(): EquipableItem {
    const talisman = this.Talisman;
    this.Talisman = undefined;
    return talisman;
  }
  //#endregion
  /** Empuña el arma con el índice entregado */  
  public WieldWeapon(index: number) {
    this.Weapons = this.Weapons.map(unWieldItem);
    this.Weapons[index].Wield();
  }
  /** Empuña el escudo con el índice entregado */  
  public WieldShield(index: number) {
    // TODO: Manejar armas que no permiten tener escudos
    // empuñados. El arma debe tener una propiedad como
    // 'IsTwoHanded' o algo por el estilo
    this.Shields = this.Shields.map(unWieldItem);
    this.Shields[index].Wield();
  }
  /** Desempuña el escudo con el índice entregado */
  public UnWieldWeapon(index: number) {
    this.Weapons[index].UnWield();
  }
  /** Desempuña el arma con el índice entregado */
  public UnWieldShield(index: number) {
    this.Shields[index].UnWield();
  }
}

/** Helper para limpiar los métodos WieldWeapon y WieldShield */
const unWieldItem = (item: WieldableItem) => {
  item.UnWield();
  return item;
}