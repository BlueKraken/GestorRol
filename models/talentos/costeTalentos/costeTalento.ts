import { NaturalezaCoste, TiemposDeBatalla } from "./enums";

//export class 

export abstract class CosteTalento {
    Naturaleza: NaturalezaCoste;
}

export class CosteDeTiempo {
    readonly Naturaleza = NaturalezaCoste.Tiempo;
    Tipo: TiemposDeBatalla;
    Valor: number;
}

export class CosteDeEnergia {
    readonly Naturaleza = NaturalezaCoste.Energia;
    Valor: number; 
}

export class CosteDeInversion{
   readonly Naturaleza = NaturalezaCoste.Inversion;
   Valor: number;
}

export class CosteDePerdida{
    readonly Naturaleza = NaturalezaCoste.Perdida;
    Tipo: TiemposDeBatalla;
    Valor: number;
}

export class CosteDeVida{
    readonly Naturaleza = NaturalezaCoste.Vida;
    Valor: number;

}