/** Describe la implementación de un objeto empuñable */
export interface Wieldable {
  /** Si el objeto está siendo empuñado */
  IsWielded: boolean;
  Wield();
  UnWield();
}