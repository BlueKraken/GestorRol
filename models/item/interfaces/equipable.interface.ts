import { EquipableItemSlot } from "../commons/equipableItemSlot";

/** Describe la implementación de un objeto equipable */
export interface Equipable {
  /** La posición del objeto dentro del equipo */
  Slot: EquipableItemSlot
  //TODO: add attribute that defines backpack capacity?
}