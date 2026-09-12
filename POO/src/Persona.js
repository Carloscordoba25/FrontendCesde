// 1. nombre de la clase primera letra mayuscula, export es para enviar datos a otras clases
 export class Persona{
// 2. propiedades (#) para crear atributos privados

#identificacion;
#nombres;
#apellidos;
#edads;
#correo;
#celular;
#estatura;

// 3. constructor
constructor(identificacion, nombres, apellidos, edads, correo, celular, estatura){
    this.#identificacion = identificacion
    this.#nombres        = nombres
    this.#apellidos      = apellidos
    this.#edads          = edads
    this.#correo         = correo
    this.#celular        = celular
    this.#estatura       = estatura
}

// get y set
get identificacion(){return this.#identificacion}
get nombres()       {return this.#nombres}
get apellidos()     {return this.#apellidos}
get edads()         {return this.#edads}
get correo()        {return this.#correo}
get celular()       {return this.#celular}
get estatura()      {return this.#estatura}



// metodos
  
   mostrarDatos() {
    return console.log(`
    +++++++++DATOS DE LA PERSONA+++++++++
    Identificacion -> ${this.identificacion}
    Nombres --------> ${this.#nombres}
    Apellidos ------> ${this.#apellidos}
    Edads ----------> ${this.#edads}
    Correo ---------> ${this.#correo}
    Celular --------> ${this.#celular}
    Estatura -------> ${this.#estatura}`)
   }

   
   actualizarDatos() {
    console.log("En construccion");
   }
}