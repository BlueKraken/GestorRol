import { MetodoFisico, EfectoFisico } from "../enums";
import { ParMetodoFisicoEfecto } from "../interfaces";

export const DatosMetodoEfectos: Array<ParMetodoFisicoEfecto> = [
    {
        metodo: MetodoFisico.Contundente,
        efecto: EfectoFisico.VenenoEnfermedad
    }, { 
        metodo: MetodoFisico.Contundente,
        efecto: EfectoFisico.Incapacitacion
    }, { 
        metodo: MetodoFisico.Contundente,
        efecto: EfectoFisico.Provocacion 
    }, { 
        metodo: MetodoFisico.Contundente,
        efecto: EfectoFisico.Sumision 
    }, {
        metodo: MetodoFisico.Cortante,
        efecto: EfectoFisico.Desangramiento
    }, {
        metodo: MetodoFisico.Cortante,
        efecto: EfectoFisico.VenenoEnfermedad
    }, {
        metodo: MetodoFisico.Cortante,
        efecto: EfectoFisico.Incapacitacion
    }, {
        metodo: MetodoFisico.Cortante,
        efecto: EfectoFisico.Provocacion
    }, {
        metodo: MetodoFisico.Cortante,
        efecto: EfectoFisico.Sumision
    }, {
        metodo: MetodoFisico.Estoque,
        efecto: EfectoFisico.Desangramiento
    }, { 
        metodo: MetodoFisico.Estoque,
        efecto: EfectoFisico.VenenoEnfermedad
    }, {
        metodo: MetodoFisico.Estoque,
        efecto: EfectoFisico.Incapacitacion
    }, { 
        metodo: MetodoFisico.Estoque,
        efecto: EfectoFisico.Provocacion
    }, { 
        metodo: MetodoFisico.Estoque,
        efecto: EfectoFisico.Sumision
    }, {
        metodo: MetodoFisico.Presencia,
        efecto: EfectoFisico.VenenoEnfermedad
    }, {
        metodo: MetodoFisico.Presencia,
        efecto: EfectoFisico.Incapacitacion
    }, {
        metodo: MetodoFisico.Presencia,
        efecto: EfectoFisico.Provocacion
    }, {
        metodo: MetodoFisico.Presencia,
        efecto: EfectoFisico.Sumision
    }, {
        metodo: MetodoFisico.TecnicaArtesania,
        efecto: EfectoFisico.CreacionInteraccion
    }, {
        metodo: MetodoFisico.TecnicaArtesania,
        efecto: EfectoFisico.Sanacion
    }, {
        metodo: MetodoFisico.TecnicaArtesania,
        efecto: EfectoFisico.VenenoEnfermedad
    }, {
        metodo: MetodoFisico.TecnicaArtesania,
        efecto: EfectoFisico.Incapacitacion
    }, {
        metodo: MetodoFisico.TecnicaArtesania,
        efecto: EfectoFisico.Provocacion
    }, {
        metodo: MetodoFisico.TecnicaArtesania,
        efecto: EfectoFisico.Sumision
    }
];