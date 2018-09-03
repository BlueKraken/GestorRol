import { EquipableItem } from './equipableItem.model';
import { Wieldable } from '../interfaces/wieldable.interface';
/** Representa un objeto empuñable */
export class WieldableItem extends EquipableItem implements Wieldable {
  private isWielded: boolean = false;
  public get IsWielded(): boolean {
    return this.isWielded;
  }
  constructor(){
    super();
  }
  public Wield() {
    this.isWielded = true;
  }
  public UnWield() {
    this.isWielded = false;
  }
}