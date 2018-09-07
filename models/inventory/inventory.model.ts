import { Backpack } from './backpack.model';
import { Gear } from './gear.model';
import { Item } from '../item/models/item.model';
import { EquipableItem } from '../item/models/equipableItem.model';
/** Representa el inventario de un personaje */
export class Inventory {
  /** Oro */
  private gold: number;
  public get Gold(): number {
    return this.gold;
  }
  /** Mochila */
  public Backpack: Backpack;
  /** Equipo */
  public Gear: Gear;
  /** Crea un nuevo inventario */
  constructor() {
    this.gold = 0;
    this.Backpack = new Backpack();
    this.Gear = new Gear();
  }
  /** Agrega oro al oro del inventario */
  public AddGold(amount: number): void {
    this.gold += amount;
  };
  /** Resta oro al oro del inventario */
  public WithdrawGold(amount: number): boolean {
    if(amount > this.gold) {
      return false;
    } else {
      this.gold -= amount;
      return true;
    }
  };
  /** Equipa un objeto de la mochila al equipo */
  public EquipItem(index: number): boolean {
    const itemToEquip = this.Backpack.WithdrawItem(index) as EquipableItem;
    const residualItem = this.Gear.EquipItem(itemToEquip);

    if (residualItem) {
      if (this.Backpack.AddItem(residualItem)) {
        return true;
      }
      return false;
    }
    return true;
  };
  /** Guarda un objeto equipado en la mochila */
  public UnEquipItem(item: Item) {
    throw 'Not implemented';
  };
  /** Guarda un nuevo objeto en la mochila */
  public StoreNewItem(item: Item): boolean {
    return this.Backpack.AddItem(item);
  };
}