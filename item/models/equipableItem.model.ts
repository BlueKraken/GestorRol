import { Item } from './item.model';
import { Equipable } from '../Interfaces/Equipable.interface';
import { EquipableItemSlot } from '../commons/equipableItemSlot';
/** Representa un objeto equipable */
export class EquipableItem extends Item implements Equipable {
  public Name: string
  public Slot: EquipableItemSlot
  constructor() {
    super();
  }
}