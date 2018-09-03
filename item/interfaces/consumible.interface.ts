/** Describe la implementación de un objeto consumible */
export interface Consumible {
  /** La cantidad de usos restantes */
  Quantity: number;
  /** La descripción del efecto al ser consumido */
  Effect: string;
  OnConsume: EventSource;
}