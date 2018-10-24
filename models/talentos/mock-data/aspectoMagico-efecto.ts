import { ParAspectoMagicoEfecto } from "../interfaces";
import { AspectoEscuelaMagica, EfectoMagico } from "../enums";

/**
 * Asumo que el aspecto de la escuela es el ligado al efecto, por 
 * lo que la escuela queda implícira
 */
export const DatosEscuelaEfectos: Array<ParAspectoMagicoEfecto> = [
    {
        aspecto: AspectoEscuelaMagica.Hielo,
        efecto: EfectoMagico.Congelamiento
    }, {
        aspecto: AspectoEscuelaMagica.Fuego,
        efecto: EfectoMagico.Quemadura
    }
];