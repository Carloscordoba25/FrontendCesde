
let usuarios = [];
let totalRetiros = 0;
let totalConsignaciones = 0;
let saldo = 0;
let ingresaNombre = "";
let ingresaClave = "";


function menuPrincipal(){
let opcion = 0;
console.log("***BIENVENIDO A LA SUCURSAL BANCARIA***");
console.log("A continiacion, el Menú Principal");

 while(opcion !== 3){
        opcion = parseInt(prompt(`
            Oprima 1 para Iniciar Traminite
            Oprima 2 Para Registro Usuario nuevo
            Oprima 3 para Finalizar `));
    
    switch(opcion){
        case 1 : transacciones(); break;
        case 2 : registrar(); break;
        case 3 : console.log("SALIENDO DEL LA SUCURSAL HASTA PRONTO 👍"); break;
        default : console.log("🚧 OPCION INVALIDA 🚧 "); break;
        }
    }
}
menuPrincipal()

 function crearUsuario(id, nombre, correo, mensaje){
     let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    for (let i = 0; i < usuarios.length; i++) {
        console.log("Usuario " + (i + 1));
        console.log("ID: " + usuarios[i].id);
        console.log("Nombre: " + usuarios[i].nombre);
        console.log("Correo: " + usuarios[i].correo);
        console.log("-------------------------");
    }

 }2

//esta es la funcion que usa prompt para agregar usuarios nuevos
function registrar(){
    console.log("Vamos a crear un usuario nuevo");
    let id = prompt ("Ingresa tu Numero de Identificacion");
    let nombre = prompt ("Ingresa tu nombre de usuario");
    let correo = prompt ("Ingresa tu email");
    let clave = prompt ("Ingresa una clave de 4 digitos");
    let validarClave = prompt ("Ingresa de nuevo tu clave");

    // Recuperar lista actual de usuarios (si existe) se hace la consulta al  arreglo usuarios[]
    usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    //Crear objeto usuario y se redefine cada vez que creo uno nuevo
    let nuevoUsuario = { id: id, nombre: nombre, correo: correo, clave: clave, validarClave: validarClave };

    // Agregamos el objeto al arreglo con .push()
    // .push() añade el elemento al final del array
    usuarios.push(nuevoUsuario)

    // Guardamos el arreglo completo en Local Storage
    // JSON.stringify convierte el array en texto para poder almacenarlo
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
    mensaje = clave === validarClave ? "Usuario creado con Exito" : "La clave no coincide";
    crearUsuario(id, nombre, correo, mensaje)
    console.log("De vuelta al Menu Principal");
}
    

function transacciones(){
    let opcion = 0;
    while(opcion !== 5){
        opcion = parseInt(prompt(`¿Que operacion bancaria desea hacer?
            1. Retiros
            2. Consultar Saldo
            3. Consignacion
            4. consultar Movimientos
            5. Menu Principal`));

    switch(opcion){
        case 1: retiros();break;
        case 2: consultarSaldo();break;
        case 3: consignacion();break;
        case 4: consultarMovimientos();break
        case 5: menuPrincipal();break;
        }
    }
}


function retiros(){
    ingresaNombre = prompt("Ingrese su Nombre de Usuario");
    ingresaClave = prompt("Ingrese su Clave");
    let retiros = parseFloat(prompt("Ingrese monto a Retirar"))

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    
    let usuario = usuarios.find(user => user.nombre === ingresaNombre && user.clave === ingresaClave);

    
    if (usuario && retiros > 0 ) {
        saldo -= retiros;
        totalRetiros += retiros;

        console.log(`Bienvenido ${usuario.nombre} acabas de retirar ${retiros} 
            ve a la seccion Consultar saldo para ver tu monto actual `);
    } else {
        
        console.log("Usuario o contraseña incorrectos");
    }
}


function consultarSaldo(){
    ingresaNombre = prompt("Ingrese su Nombre de Usuario");
    ingresaClave = prompt("Ingrese su Clave");

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuario = usuarios.find(user => user.nombre === ingresaNombre && user.clave === ingresaClave);

    if (usuario) {
        console.log(`Bienvenido ${usuario.nombre} Su saldo es ${saldo}`);
    } else {
       
        console.log("Usuario o contraseña incorrectos 🚧");
    }
    
}


function consignacion (){
    ingresaNombre = prompt("Ingrese su Nombre de Usuario");
    ingresaClave = prompt("Ingrese su Clave");
    let consignar = parseFloat(prompt("Que monto desea consignar?"))

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuario = usuarios.find(user => user.nombre === ingresaNombre && user.clave === ingresaClave);

    if (usuario) {
        saldo += consignar;
        totalConsignaciones += consignar;

        console.log(`Bienvenido ${usuario.nombre} Acabas de consignar ${consignar}`);

    } else if (consignar <= 0) {
        
        console.log(`${consignar} es Monto Invalido 🚨 debe ser un monto mayor a 0 pesos`);
    }else {
        console.log("Usuario o contraseña incorrectos 🚧")
    }


}

function consultarMovimientos(){
    ingresaNombre = prompt("Ingrese su Nombre de Usuario");
    ingresaClave = prompt("Ingrese su Clave");

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuario = usuarios.find(user => user.nombre === ingresaNombre && user.clave === ingresaClave);

    if (usuario) {
        console.log(`Bienvenido ${usuario.nombre} Su Movimientos han sido:
            Retiros ${totalRetiros}
            consignaciones ${totalConsignaciones}`);
    } else {
       
        console.log("Usuario o contraseña incorrectos 🚧");
    }
}
menuPrincipal();



