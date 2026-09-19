import { Persona } from "./Persona.js";

export class Estudiante extends Persona {
	#carrera;
	#horarioClase;
	#valorMatricula;

	constructor(
		identificacion,
		nombres,
		apellidos,
		edad,
		correo,
		celular,
		estatura,
		carrera,
		horarioClase,
		valorMatricula
	) {
		super(identificacion, nombres, apellidos, edad, correo, celular, estatura);
		this.#carrera = carrera;
		this.#horarioClase = horarioClase;
		this.#valorMatricula = valorMatricula;
	}

	get carrera() {
		return this.#carrera;
	}

	set carrera(nuevaCarrera) {
		this.#carrera = nuevaCarrera;
	}

	get horarioClase() {
		return this.#horarioClase;
	}

	set horarioClase(nuevoHorario) {
		this.#horarioClase = nuevoHorario;
	}

	get valorMatricula() {
		return this.#valorMatricula;
	}

	set valorMatricula(nuevoValor) {
		this.#valorMatricula = nuevoValor;
	}

	mostrarDatos() {
		return `${super.mostrarDatos()}
	Carrera ----------> ${this.#carrera}
	Horario de clase -> ${this.#horarioClase}
	Matricula --------> ${this.#valorMatricula}`;
	}
}
