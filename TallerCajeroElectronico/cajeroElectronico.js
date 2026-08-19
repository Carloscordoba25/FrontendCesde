
let totalRetiros = 0;
let totalConsignaciones = 0;
let saldo = 0;
let nombre = "";
let clave = 0;

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
        case 2 : pedirdatos(); break;
        case 3 : console.log("SALIENDO DEL LA SUCURSAL HASTA PRONTO 👍"); break;
        default : console.log("🚧 OPCION INVALIDA 🚧 "); break;
        }
    }
}

menuPrincipal();

 function crearUsuario(id, nombre, correo, clave, validarClave, mensaje){
    console.log(`++++NUEVO USUARIO++++
        ID -------> ${id}
        NOMBRE ---> ${nombre}
        EMAIL ----> ${correo}
        CLAVE ----> ${clave}
        detalle -> ${mensaje}`);

 }

//esta es la funcion que usa prompt para agregar usuarios nuevos
function pedirdatos(){
    console.log("Vamos a crear un usuario nuevo");
    let id = prompt ("Ingresa tu Numero de Identificacion");
    nombre = prompt ("Ingresa tu nombre de usuario");
    let correo = prompt ("Ingresa tu email");
    clave = parseInt(prompt ("Ingresa una clave de 4 digitos"));
    let validarClave = parseInt (prompt ("Ingresa de nuevo tu clave"));
    
    mensaje = clave === validarClave ? "Usuario creado con Exito" : "La clave no coincide";
    crearUsuario(id, nombre, correo, clave, validarClave, mensaje)
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
    let ingresaNombre = prompt("Ingrese su Nombre de Usuario");
    let ingresaClave = parseInt(prompt("Ingrese su Clave"));

    if (ingresaNombre === nombre && ingresaClave === clave){
1
    let retiro = parseFloat(prompt(`Cuanto desea retirar`));

    if (retiro <= saldo){
    saldo -= retiro;
    totalRetiros += retiro;
    console.log(`Acabas de retirar ${retiro}`);}
    else {
    console.log("Fondos Insuficientes");
        }
    return saldo;
    } else{alert("Usuario o contraseña incorrectos");}
}


function consultarSaldo(){
    console.log(`Tu saldo actual es: ${saldo}`);
    return saldo;
}


function consignacion (){
    let consignar = parseFloat(prompt(`Cuanto desea consignar?`))
    if (consignar > 0 ){
        saldo += consignar;
        totalConsignaciones += consignar;
        console.log(`Acabas de Consignar ${consignar} 🤑`);
    }else{console.log("Monto Invalido 🚨");}
    return saldo;

}

function consultarMovimientos(){
    console.log(`Has relizado los siguientes Movimientos
        Retiros ${totalRetiros}
        consignaciones ${totalConsignaciones}`);
}




