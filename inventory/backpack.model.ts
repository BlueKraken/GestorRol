import { Item } from '../item/models/item.model';
/** Representa la mochila de un personaje */
export class Backpack {
  /** La colección de objetos dentro de la mochila */
  private items: Array<Item> = [];
  public get Items() { return this.items; }
  /** Crea una nueva mochila */
  constructor() {}
  /** Quita un objeto de la mochila */
  public WithdrawItem(index: number): Item {
    return this.items[index];
  }
  /** Agrega un objeto a la mochila */
  public AddItem(item: Item): boolean {
    if(this.ItemFitIn(item)) {
      this.Items.push(item);
      return true;
    } else return false;
  }
  /** Chequea si el objeto cabe en la mochila */
  private ItemFitIn(item: Item): boolean {
    return true;
  }
}