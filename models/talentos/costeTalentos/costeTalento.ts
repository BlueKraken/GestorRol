import { NaturalezaCoste, TiemposDeBatalla, AtributoPagable } from "./enums";

//export class 

export abstract class CosteTalento {
    Naturaleza: NaturalezaCoste;
}

export class CosteDeTiempo {
    readonly Naturaleza = NaturalezaCoste.Tiempo;
    Tipo: TiemposDeBatalla;
    Coste: number;
}

export class CosteDeEnergia {
    readonly Naturaleza = NaturalezaCoste.Energia;
    Coste: number; 
}

export class CosteDeInversion{
   readonly Naturaleza = NaturalezaCoste.Inversion;
   Coste: number;
}

export class CosteDePerdida{
    readonly Naturaleza = NaturalezaCoste.Perdida;
    Tipo: TiemposDeBatalla;
    Coste: number;
}

export class CosteDeVida{
    readonly Naturaleza = NaturalezaCoste.Vida;
    Coste: number;
}

export class CosteDeAtributoPorTiempo {
    readonly Naturaleza = NaturalezaCoste.AtributoTiempo;
    Coste: number;
    Atributo: AtributoPagable;
    TipoTiempo: TiemposDeBatalla;
    Tiempo: number;
}