import {Persona} from './Persona.js';

export class Profesor extends Persona{
    #titulo;
    #materia;

    constructor(identificacion, nombres, apellidos, edads, correo, celular, estatura, titulo, materia){
        super(identificacion, nombres, apellidos, edads, correo, celular, estatura);
        this.#titulo = titulo;
        this.#materia = materia;
    }

    get titulo(){return this.#titulo}
    set titulo(nuevoTitulo){this.#titulo=nuevoTitulo}
    get materia(){return this.#materia}
    set materia(nuevaMateria){this.#materia=nuevaMateria}

    mostrarDatos(){
        return `${super.mostrarDatos()}
    Titulo ----------> ${this.titulo}
    Materia ---------> ${this.materia}`;
    }   
}
