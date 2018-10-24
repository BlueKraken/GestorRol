import { TipoAfeccion,FocoAfeccion, EscuelaMagica, MetodoFisico,
    EfectoMagico, EfectoFisico, FocoCoste, AparicionCoste, CategoriaIndice, AspectoEscuelaMagica } from "./enums";

export abstract class IndiceTalento {
    Nombre: string;
    Categoria: CategoriaIndice;
}

export class IndiceDeCoste extends IndiceTalento {
    readonly Categoria = CategoriaIndice.Coste;
    Aparicion: AparicionCoste
    Foco: FocoCoste;
    ExclusionPropia: boolean;
}

// Mientras la afección mágica y la afección física se trate
// igual, no tengo por que abstraer ambos tipos a clases independientes
export class IndiceDeAfeccion extends IndiceTalento {
    readonly Categoria = CategoriaIndice.Afeccion;
    Tipo: TipoAfeccion;
    Foco: FocoAfeccion;
}

export class IndiceFisico extends IndiceDeAfeccion {
    Metodo: MetodoFisico;
    Efecto: EfectoFisico;
}

export class IndiceMagico extends IndiceDeAfeccion {
    Escuela: EscuelaMagica;
    Aspecto: AspectoEscuelaMagica;
    Efecto: EfectoMagico;
}