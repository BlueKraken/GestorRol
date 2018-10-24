import { EscuelaMagica, MetodoFisico, EfectoFisico, 
    EfectoMagico, AspectoEscuelaMagica } from "./enums";

// Dado que los siguientes pares de conceptos:
//   - Metodo físico y Efecto,
//   - Escuela mágica y Efecto
//   - Escuela mágica y Aspecto
// Tienen una asociación n:m, la data debe ser entregada como una colección
// de los 2 conceptos asociados en un objeto. Por lo que se propone el siguiente
// patrón de diseño de interfaces para definir pares de conceptos relacionados
// de esta manera:
export interface ParMetodoFisicoEfecto {
    metodo: MetodoFisico,
    efecto: EfectoFisico
};
export interface ParEscuelaMagicaAspecto {
    escuela: EscuelaMagica,
    aspecto: AspectoEscuelaMagica
};
export interface ParAspectoMagicoEfecto {
    aspecto: AspectoEscuelaMagica,
    efecto: EfectoMagico
};