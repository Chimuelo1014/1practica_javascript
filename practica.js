//1 Declara variables que representen tu nombre, edad, estatura en metros, ciudad y si tienes mascota (sí/no)

// let name = "Samuel"
// let age = 18
// let height = 1.77
// let country = "Medellin"
// let pet = true


//2 Cambia los valores y explica qué tipo de dato representa cada uno (Muestra en consola el tipo de dato).
//Nombre
// name = "santiago"
// console.log(typeof(name))
// //edad
// age = 19
// console.log(typeof(age)) 
// //altura
// height = 1.80
// console.log(typeof(height)) 




//3 Declara dos variables que se sumen (por ejemplo, cantidad de amigos en dos redes sociales) y una que contenga el resultado de una concatenación


// let friends_facebook = 20 
// let friends_instagram = 20 

// let total_friends = friends_facebook+friends_instagram 
// console.log(total_friends)


//4 Una persona quiere entrar a una discoteca. Solo puede si tiene más de 18 años. Muestra un mensaje dependiendo si entra o no.
// let age = prompt("Ingrese su edad: "); 
// let age_num = Number(age);

// if(age_num>=18){
//     prompt("El ususario es mayor de edad");
// } else{
//     prompt("El ususario es menor de edad");} 



//5 Una tienda online da descuentos si el cliente compra más de 3 productos. Evalúa si aplica descuento
// let amount = prompt("Ingrese la cantidad de productos: "); 
// let amount_num = Number(amount);

// if(amount_num>3){
//     prompt("Si aplica descuento");
// } else{
//     prompt("No aplica descuento");} 



//6 Un estudiante recibe una nota del 0 al 5. Crea condiciones para saber si reprueba, aprueba o tiene excelente desempeño.

// let calification = prompt("Ingrese la nota del estudiante: "); 
// let calification_num = Number(calification);
// if(calification_num>5 || calification_num<0){
//     prompt("Ingrese un numero valido");
// } else if(calification_num>4 && calification_num<=5){
//     prompt("Excelente desempeño");
//    } else if(calification_num > 3 && calification_num <=4){
//         prompt("aprobo");

//    }else if(calification_num < 3{
//         prompt("reprobo");

//    } 


//7 Un semáforo tiene tres moneyes. Dependiendo del money, se debe mostrar una acción: avanzar, detenerse o esperar.

// let money = prompt("Ingrese el money del semaforo: ");

// if (money == "Verde" || money == "verde"){
//     console.log("Puede pasar")
// } else if (money == "Amarillo" || money == "amarillo"){
//     console.log("Reduzca la velocidad")
// } else if (money == "Rojo" || money == "rojo"){
//     console.log("Detengase")
// } else {
//     console.log("Ingrese un money valido")
// }







//8 Para entrar a un torneo se debe tener entre 15 y 35 años y ser residente de Colombia. Evalúa si una persona puede participar.

// let age = prompt("Ingrese su edad: "); 
// let age_num = Number(age);
  //if(age_num<0){
    //console.log("No puede participar")
  //}


// 9 En una aplicación bancaria: o Si la cuenta tiene menos de $10.000, muestra “Saldo insuficiente”.o Si tiene entre $10.000 y $1.000.000, muestra “Saldo moderado”.o Si tiene más de $1.000.000 o tiene tarjeta premium, muestra “Clientepreferencial”.

// let money = prompt("Ingrese el dinero disponible: ");
// let money_num = Number(money);    
// if (money <10000 && money>0){
//     console.log("Saldo insuficiente")
// } else if (money>=10000 &&  money<=1000000){
//     console.log("Saldo moderado")
// } else if (money>1000000){
//     console.log("Cliente preferencial")
// } else {
//     console.log("Ingrese una cantidad valida")
// }


// 10 . Un restaurante ofrece menús dependiendo del día de la semana. Escribe una lógica que, según el día, muestre qué menú hay disponible.


// let day = prompt("Ingrese el dia: ");    



// switch(day){
//     case "lunes" || "Lunes" :
//         console.log("El plato del dia son frijoles");
//         break;
//     case "Martes" || "martes" :
//         console.log("El plato del dia es huevo con arroz");
//         break;
//     case "Miercoles" || "miercoles" :
//         console.log("El plato del dia son lentejas");
//         break;
//     case "Jueves" || "jueves" :
//         console.log("El plato del dia es sopa");
//         break;
//     case "Viernes" || "viernes" :
//         console.log("El plato del dia es pollo");
//         break;
//     default:
//         console.log("Ingrese un dia valido") 

        

// }



// Para Node.js, necesitamos un módulo para la entrada del usuario.
// Instala con: npm install readline-sync
// const readlineSync = require('readline-sync');

// console.log("--- Ejercicio 11: Acceso a oferta ---"); [span_0](start_span)//[span_0](end_span)
// // Evalúa si un usuario puede acceder a una oferta:
// [span_1](start_span)// • Tiene que haber iniciado sesión.[span_1](end_span)
// [span_2](start_span)// • No debe tener reportes activos.[span_2](end_span)
// [span_3](start_span)// • Su edad debe ser mayor a 21 años o tener membresía premium.[span_3](end_span)

// function verificarOferta() {
//     console.log("\n--- Verificación de Oferta ---");
//     const sesionIniciada = readlineSync.keyInYNStrict('¿Ha iniciado sesión? (y/n)');
//     const reportesActivos = readlineSync.keyInYNStrict('¿Tiene reportes activos? (y/n)');
//     const edad = parseInt(readlineSync.question('¿Cuál es su edad? '));
//     const membresiaPremium = readlineSync.keyInYNStrict('¿Tiene membresía premium? (y/n)');

//     if (sesionIniciada && !reportesActivos && (edad > 21 || membresiaPremium)) {
//         console.log("¡Felicidades! Puede acceder a la oferta.");
//     } else {
//         console.log("Lo sentimos, no cumple los requisitos para la oferta.");
//         if (!sesionIniciada) console.log("- No ha iniciado sesión.");
//         if (reportesActivos) console.log("- Tiene reportes activos.");
//         if (edad <= 21 && !membresiaPremium) console.log("- No cumple con la edad o no tiene membresía premium.");
//     }
// }
// verificarOferta();


// console.log("\n--- Ejercicio 12: App de transporte ---"); [span_4](start_span)//[span_4](end_span)
// // Una app de transporte da recomendaciones dependiendo de:
// [span_5](start_span)// La hora del día (mañana, tarde, noche)[span_5](end_span)
// [span_6](start_span)// El clima (soleado, lluvioso, nuboso)[span_6](end_span)
// [span_7](start_span)// Si el usuario tiene paraguas o no[span_7](end_span)
// [span_8](start_span)// Dependiendo de esas variables, sugiere si caminar, tomar bus, o esperar.[span_8](end_span)

// function recomendarTransporte() {
//     console.log("\n--- Recomendación de Transporte ---");
//     const horaDia = readlineSync.question('¿Qué hora del día es? (mañana, tarde, noche): ').toLowerCase();
//     const clima = readlineSync.question('¿Cómo está el clima? (soleado, lluvioso, nublado): ').toLowerCase();
//     const tieneParaguas = readlineSync.keyInYNStrict('¿Tiene paraguas? (y/n)');

//     if (clima === 'lluvioso' && !tieneParaguas) {
//         console.log("Es lluvioso y no tienes paraguas. Deberías tomar el bus.");
//     } else if (clima === 'soleado' && horaDia === 'mañana') {
//         console.log("Hace sol por la mañana. ¡Un buen día para caminar!");
//     } else if (clima === 'nublado' && horaDia === 'tarde') {
//         console.log("Está nublado por la tarde. Podrías caminar, pero ten un plan B.");
//     } else {
//         console.log("Considera tomar el bus o esperar a que cambien las condiciones.");
//     }
// }
// recomendarTransporte();


// console.log("\n--- Ejercicio 13: Sistema de acceso ---"); [span_9](start_span)//[span_9](end_span)
// // Crea un sistema de acceso a una plataforma que:
// [span_10](start_span)// • Verifique si el usuario ingresó usuario y contraseña válidos.[span_10](end_span)
// [span_11](start_span)// • Bloquee el acceso si hay más de 3 intentos fallidos.[span_11](end_span)
// [span_12](start_span)// • Permita el acceso si es administrador, aunque falle una vez.[span_12](end_span)

// function sistemaAcceso() {
//     console.log("\n--- Sistema de Acceso ---");
//     const usuarioCorrecto = "admin";
//     const contrasenaCorrecta = "pass123";
//     let intentosFallidos = 0;
//     const maxIntentos = 3;

//     while (intentosFallidos < maxIntentos) {
//         const usuarioIngresado = readlineSync.question('Usuario: ');
//         const contrasenaIngresada = readlineSync.question('Contrasena: ', { hideEchoBack: true }); // Oculta la entrada

//         if (usuarioIngresado === usuarioCorrecto && contrasenaIngresada === contrasenaCorrecta) {
//             console.log("¡Bienvenido al sistema!");
//             return; // Sale de la función si el acceso es correcto
//         } else {
//             intentosFallidos++;
//             if (usuarioIngresado === "admin" && contrasenaIngresada !== contrasenaCorrecta && intentosFallidos === 1) {
//                 console.log("Administrador: Contraseña incorrecta, pero aún puedes intentarlo. Te queda 1 intento.");
//                 // Se le da una segunda oportunidad al administrador
//             } else {
//                 console.log(`Usuario o contraseña incorrectos. Intentos restantes: ${maxIntentos - intentosFallidos}`);
//             }
//         }
//     }
//     console.log("Acceso bloqueado. Demasiados intentos fallidos.");
// }
// sistemaAcceso();


// console.log("\n--- Ejercicio 14: Simular ingreso de usuarios ---"); [span_13](start_span)//[span_13](end_span)
// // Simula el ingreso de 5 nombres de usuarios. Por cada usuario ingresado:
// [span_14](start_span)// • Verifica si el nombre tiene más de 3 caracteres.[span_14](end_span)
// [span_15](start_span)// • Si no cumple, muestra un mensaje de error.[span_15](end_span)
// [span_16](start_span)// Al final, muestra cuántos usuarios válidos se registraron.[span_16](end_span)

// function simularUsuarios() {
//     console.log("\n--- Registro de Usuarios ---");
//     let usuariosValidos = 0;
//     for (let i = 0; i < 5; i++) {
//         const nombreUsuario = readlineSync.question(`Ingrese nombre para usuario ${i + 1}: `);
//         if (nombreUsuario.length > 3) {
//             console.log(`'${nombreUsuario}' es un nombre de usuario válido.`);
//             usuariosValidos++;
//         } else {
//             console.log(`ERROR: El nombre de usuario '${nombreUsuario}' debe tener más de 3 caracteres.`); [span_17](start_span)//[span_17](end_span)
//         }
//     }
//     console.log(`Total de usuarios válidos registrados: ${usuariosValidos}`); [span_18](start_span)//[span_18](end_span)
// }
// simularUsuarios();


// console.log("\n--- Ejercicio 15: Validación de contraseñas ---"); [span_19](start_span)//[span_19](end_span)
// // Pide que se ingresen contraseñas (simuladas en una lista) y:
// [span_20](start_span)// • Valida que cada una tenga al menos 8 caracteres y contenga un número.[span_20](end_span)
// [span_21](start_span)// • Si no cumple, muestra que debe cambiarla.[span_21](end_span)
// [span_22](start_span)// • Detén el ciclo si se encuentra una contraseña válida.[span_22](end_span)

// function validarContrasenas() {
//     console.log("\n--- Validación de Contraseñas ---");
//     let contrasenaValidaEncontrada = false;
//     let intentos = 0;

//     while (!contrasenaValidaEncontrada) {
//         intentos++;
//         const contrasena = readlineSync.question(`Intento ${intentos}: Ingrese una contraseña: `, { hideEchoBack: true });

//         const tieneOchoCaracteres = contrasena.length >= 8;
//         const tieneNumero = /\d/.test(contrasena); // Expresión regular para verificar si contiene un dígito

//         if (tieneOchoCaracteres && tieneNumero) {
//             console.log("¡Contraseña válida! Acceso concedido.");
//             contrasenaValidaEncontrada = true; [span_23](start_span)//[span_23](end_span)
//         } else {
//             console.log("Contraseña inválida. Debe tener al menos 8 caracteres y contener un número. Por favor, cámbiela."); [span_24](start_span)//[span_24](end_span)
//         }
//     }
// }
// validarContrasenas();


// console.log("\n--- Ejercicio 16: Encuesta de servicio ---"); [span_25](start_span)//[span_25](end_span)
// [span_26](start_span)// Simula una encuesta donde el sistema pregunta la calificación del servicio (1 a 5).[span_26](end_span)
// [span_27](start_span)// • Mientras la calificación no sea 5, sigue preguntando.[span_27](end_span)
// [span_28](start_span)// • Muestra un mensaje de agradecimiento cuando por fin alguien califique con 5.[span_28](end_span)

// function encuestaServicio() {
//     console.log("\n--- Encuesta de Servicio ---");
//     let calificacion;
//     do {
//         calificacion = parseInt(readlineSync.question('Por favor, califique nuestro servicio del 1 al 5: '));
//         if (isNaN(calificacion) || calificacion < 1 || calificacion > 5) {
//             console.log("Por favor, ingrese un número válido entre 1 y 5.");
//         } else if (calificacion !== 5) {
//             console.log("Gracias por tu calificación. Nos esforzaremos por mejorar.");
//         }
//     } while (calificacion !== 5); [span_29](start_span)//[span_29](end_span)

//     console.log("¡Muchas gracias por calificar nuestro servicio con un 5! Agradecemos tu excelencia."); [span_30](start_span)//[span_30](end_span)
// }
// encuestaServicio();


// console.log("\n--- Ejercicio 17: Intentos de inicio de sesión ---"); [span_31](start_span)//[span_31](end_span)
// [span_32](start_span)// Permite hasta 3 intentos para iniciar sesión.[span_32](end_span)
// [span_33](start_span)// • Si el usuario ingresa mal el nombre o contraseña, se le notifica cuántos intentos le quedan.[span_33](end_span)
// [span_34](start_span)// • Si acierta, muestra "Bienvenido".[span_34](end_span)
// [span_35](start_span)// • Si falla 3 veces, muestra "Cuenta bloqueada".[span_35](end_span)

// function iniciarSesion() {
//     console.log("\n--- Inicio de Sesión ---");
//     const usuarioValido = "usuario";
//     const contrasenaValida = "clave";
//     let intentosRestantes = 3; [span_36](start_span)//[span_36](end_span)

//     while (intentosRestantes > 0) {
//         const usuario = readlineSync.question('Usuario: ');
//         const contrasena = readlineSync.question('Contraseña: ', { hideEchoBack: true });

//         if (usuario === usuarioValido && contrasena === contrasenaValida) {
//             console.log("¡Bienvenido!"); [span_37](start_span)//[span_37](end_span)
//             return; // Sale de la función
//         } else {
//             intentosRestantes--;
//             if (intentosRestantes > 0) {
//                 console.log(`Usuario o contraseña incorrectos. Te quedan ${intentosRestantes} intentos.`); [span_38](start_span)//[span_38](end_span)
//             }
//         }
//     }
//     console.log("Cuenta bloqueada. Has fallado 3 veces."); [span_39](start_span)//[span_39](end_span)
// }
// iniciarSesion();


// console.log("\n--- Ejercicio 18: Menú en consola ---"); [span_40](start_span)//[span_40](end_span)
// [span_41](start_span)// Simula un menú en consola que se repite hasta que el usuario elija "salir".[span_41](end_span)
// [span_42](start_span)// • Opciones: Ver perfil, Editar perfil, Cerrar sesión.[span_42](end_span)
// [span_43](start_span)// • Cada opción debe mostrar un mensaje, y repetir hasta que seleccione salir.[span_43](end_span)

// function menuConsola() {
//     console.log("\n--- Menú de Opciones ---");
//     let opcion;
//     do {
//         console.log("\nSeleccione una opción:");
//         console.log("1. Ver perfil"); [span_44](start_span)//[span_44](end_span)
//         console.log("2. Editar perfil"); [span_45](start_span)//[span_45](end_span)
//         console.log("3. Cerrar sesión"); [span_46](start_span)//[span_46](end_span)
//         console.log("4. Salir"); [span_47](start_span)//[span_47](end_span)
//         opcion = readlineSync.question('Su elección: ');

//         switch (opcion) {
//             case '1':
//                 console.log("Mostrando información de tu perfil..."); [span_48](start_span)//[span_48](end_span)
//                 break;
//             case '2':
//                 console.log("Accediendo a la configuración para editar tu perfil..."); [span_49](start_span)//[span_49](end_span)
//                 break;
//             case '3':
//                 console.log("Cerrando tu sesión..."); [span_50](start_span)//[span_50](end_span)
//                 break;
//             case '4':
//                 console.log("Saliendo del menú. ¡Hasta luego!");
//                 break;
//             default:
//                 console.log("Opción no válida. Por favor, intente de nuevo.");
//         }
//     } while (opcion !== '4'); [span_51](start_span)//[span_51](end_span)
// }
// menuConsola();


// console.log("\n--- Ejercicio 19: Carrito de compras ---"); [span_52](start_span)//[span_52](end_span)
// [span_53](start_span)// Simula un carrito con productos y precios.[span_53](end_span)
// [span_54](start_span)// El usuario puede "agregar producto" o "finalizar compra".[span_54](end_span)
// [span_55](start_span)// Cada vez que agrega, suma al total.[span_55](end_span)
// [span_56](start_span)// Al finalizar, muestra el valor total del carrito.[span_56](end_span)

// function carritoCompras() {
//     console.log("\n--- Simulación de Carrito de Compras ---");
//     let totalCarrito = 0;
//     let continuar = true;

//     while (continuar) {
//         console.log("\nOpciones:");
//         console.log("1. Agregar producto"); [span_57](start_span)//[span_57](end_span)
//         console.log("2. Finalizar compra"); [span_58](start_span)//[span_58](end_span)
//         const opcion = readlineSync.question('Elija una opción: ');

//         switch (opcion) {
//             case '1':
//                 const nombreProducto = readlineSync.question('Nombre del producto: ');
//                 const precioProducto = parseFloat(readlineSync.question('Precio del producto: '));

//                 if (!isNaN(precioProducto) && precioProducto > 0) {
//                     totalCarrito += precioProducto; [span_59](start_span)//[span_59](end_span)
//                     console.log(`'${nombreProducto}' agregado. Total actual: $${totalCarrito.toFixed(2)}`);
//                 } else {
//                     console.log("Precio no válido. Por favor, intente de nuevo.");
//                 }
//                 break;
//             case '2':
//                 console.log(`\nCompra finalizada. El valor total de su carrito es: $${totalCarrito.toFixed(2)}`); [span_60](start_span)//[span_60](end_span)
//                 continuar = false;
//                 break;
//             default:
//                 console.log("Opción no válida. Por favor, intente de nuevo.");
//         }
//     }
// }
// carritoCompras();


// console.log("\n--- Ejercicio 20: Notas de estudiantes ---"); [span_61](start_span)//[span_61](end_span)
// [span_62](start_span)// Se ingresan las notas de 5 estudiantes.[span_62](end_span)
// [span_63](start_span)// Por cada estudiante, si la nota es menor a 3, se le muestra que está en riesgo.[span_63](end_span)
// [span_64](start_span)// Al final, muestra:[span_64](end_span)
// [span_65](start_span)// • Promedio general[span_65](end_span)
// [span_66](start_span)// • Número de estudiantes en riesgo[span_66](end_span)
// [span_67](start_span)// • Mayor y menor nota[span_67](end_span)

// function notasEstudiantes() {
//     console.log("\n--- Análisis de Notas de Estudiantes ---");
//     const numEstudiantes = 5;
//     let sumaNotas = 0;
//     let estudiantesEnRiesgo = 0;
//     let mayorNota = -1;
//     let menorNota = 6; // Asumimos notas del 0 al 5, así que un valor inicial alto.

//     for (let i = 0; i < numEstudiantes; i++) {
//         let nota;
//         do {
//             nota = parseFloat(readlineSync.question(`Ingrese la nota del estudiante ${i + 1} (0-5): `));
//             if (isNaN(nota) || nota < 0 || nota > 5) {
//                 console.log("Nota no válida. Por favor, ingrese un número entre 0 y 5.");
//             }
//         } while (isNaN(nota) || nota < 0 || nota > 5);

//         sumaNotas += nota;

//         [span_68](start_span)if (nota < 3) { //[span_68](end_span)
//             console.log(`¡Advertencia! El estudiante ${i + 1} está en riesgo (nota: ${nota}).`); [span_69](start_span)//[span_69](end_span)
//             estudiantesEnRiesgo++;
//         }

//         if (nota > mayorNota) {
//             mayorNota = nota;
//         }
//         if (nota < menorNota) {
//             menorNota = nota;
//         }
//     }

//     const promedio = sumaNotas / numEstudiantes; [span_70](start_span)//[span_70](end_span)

//     console.log("\n--- Resultados Finales ---");
//     console.log(`Promedio general de las notas: ${promedio.toFixed(2)}`); [span_71](start_span)//[span_71](end_span)
//     console.log(`Número de estudiantes en riesgo: ${estudiantesEnRiesgo}`); [span_72](start_span)//[span_72](end_span)
//     console.log(`La mayor nota ingresada fue: ${mayorNota}`); [span_73](start_span)//[span_73](end_span)
//     console.log(`La menor nota ingresada fue: ${menorNota}`); [span_74](start_span)//[span_74](end_span)
// }
// notasEstudiantes();









