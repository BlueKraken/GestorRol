import { Item } from './item.model';
import { Consumible } from '../interfaces/consumible.interface';
import { Equipable } from '../Interfaces/Equipable.interface';
import { EquipableItemSlot } from '../commons/equipableItemSlot';
/** Representa un objeto consumible */
export class ConsumibleItem extends Item implements Consumible, Equipable {
  public Slot: EquipableItemSlot = EquipableItemSlot.Consumible;
  public Quantity: number;
  public Effect: string;
  public OnConsume: EventSource;
  constructor() {
    super();
  }
}