// Enumeraciones como diccionario de recursos para identificar
// tipos de conceptos y evitar "strings mágicos".

// Mientras los datos a manejar sean solo un identificador, o nombre,
// utilizar este patrón es suficiente, aún cuando utilizemos una BD.
export enum CategoriaIndice {
    Coste = 'coste',
    Afeccion = 'afección'
}
// Para índice afección
export enum TipoAfeccion {
    Fisico = 'físico',
    Magico = 'mágico'
};
export enum FocoAfeccion {
    Metabolico = 'metabolico',
    Sugestivo = 'sugestivo',
};
// Para afección mágica 
export enum EscuelaMagica {
    Trascendental = "trascendental",
    Elemental = "elemental",
    Arcana = "arcana"
};
export enum AspectoEscuelaMagica {
    Fuego = 'fuego',
    Agua = 'agua',
    Tierra = 'tierra',
    Aire = 'aire',
    Espiritu = 'espíritu',
    Reflejo = 'reflejo',
    Umbra = 'umbra',
    Hielo = 'hielo',
    Rayo = 'rayo',
};
export enum EfectoMagico {
    Congelamiento = 'congelamiento',
    Quemadura = 'quemadura'
};
// Para afección física
export enum MetodoFisico {
    Cortante = 'cortante', 
    Estoque = 'de estoque',
    Contundente = 'contundente', 
    TecnicaArtesania = 'técnica / artesanía',
    Presencia = 'presencia'
};
export enum EfectoFisico {
    CreacionInteraccion = 'creación / interacción',
    Sanacion = 'sanación',
    Desangramiento = 'desangramiento',
    VenenoEnfermedad = 'veneno / enfermedad',
    Incapacitacion = 'incapacitación',
    Provocacion = 'provocación',
    Sumision = 'sumisión'
};
//Para índice coste
export enum AparicionCoste {
    EnTalentos = 'en hoja de talentos',
    EnTalentosYAtributos = 'en hoja de talentos y atributos',
    EnTalentosYAtaques = 'en hoja de talentos y ataques'
};
export enum FocoCoste {
    UnoMismo = 'uno mismo',
    EquipoEntero = 'equipo entero',
    Enemigos = 'enemigos',
    Todos = 'todos',
    ObjetivoSimple = 'un objetivo',
    ObjetivoAliado = 'un aliado',
    ObjetivoEnemigo = 'un enemigo'
};