// importacion de datos desde persona
import { Persona } from "./Persona.js";
import { Profesor } from "./Profesor.js";

//crear objeto de la clase persona
// new significa instanciar o crear

const persona1 = new Persona ("1111", "Carlos", "Cordoba", 34, "acevedo@co", "2222222", 1,78);
const fulano = new Persona ("2222", "fulano", "detal", 40, "fulano@", "3333333", 1.60);

persona1.mostrarDatos();
fulano.mostrarDatos();

const profesorLeo = new Profesor (55555, "Leo", "Pinto", 29, "Leo@", "55555555", 1.70, "Ingeniero", "Desarrollo Web")

alert(profesorLeo.mostrarDatos());