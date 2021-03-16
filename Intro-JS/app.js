// console.log ('Hola mundo');

//  ----------------------------------------------------------- **Tipos de datos JS** -------------------------------------
// String: cadena de caracteres. 
// Boolean: true false
// Null: nulo
// Number: 123456789 ...
// '123' es un String, es distindto a 123 que es un Number.
// Underfined
// Object: objeto

// ----------------------------------------------------------- **Definicion de variables** -------------------------------------
// var
// let
// const

// var miPrimeraVariable = 'lala'

// let miPrimeraVariable = 'Mi primera variable!'
// console.log(miPrimeraVariable);

// mutabilidad
// miPrimeraVariable = 'Esta ha cambiado'
// console.log(miPrimeraVariable);

// boolean
// let miBoolean = true
// let miOtroBoolean = false

// let miNumero = 0
// let miNumero2 = 10
// let miNumero3 = -255

// console.log(miBoolean, miNumero, miNumero2, miNumero3);

// let undef
// console.log(undef);

// let nulo = null
// console.log('nulo', 255, nulo);

// --------------------------------- ***Objeto. Un objeto es una agrupacion de datos, estos datos hacen sentido entre si.** -------------

// Objeto vacio
// const miPrimerObjeto = {}




// Objeto

// const miObjeto = {
//      unNumero: 255,
//      unString: 'Esta cadena de caracteres',
//      unaCondicion: true,
// }
// console.log(miObjeto.unaCondicion);

// ----------------------------------------------------------- **Array** ------------------------------------------------------------

// Array vacio
// const arrVacio = []

// const arr = [ 255, 255, 'Luis', miObjeto]

// arrVacio.push(255)
// arrVacio.push('Luis')
// arrVacio.push(255)
// arrVacio.push('Karla')
// arrVacio.push(255)

// console.log(arrVacio);

// -------------------------------------------------------------*** Metodo Array.ForEach ***-------------------------------------------------------------

// let arr = [ 'karla', 'Luis', 'miObjeto'];

// function convertirMayusculas (texto) {
//     const respuesta = texto.toUpperCase()
//     console.log(respuesta)
// }

// arr.forEach(convertirMayusculas)

// -------------------------------------------------------------*** Metodo Array.Filter ***-------------------------------------------------------------

// let miArray = [1,2,3,4,5,6,7,8,9];

// function soloPares(numeroActual) {
//      return numeroActual % 2 === 0
// }

// let resultado = miArray.filter(soloPares)
// console.log (resultado)

// ---------------------------------------------------- **Operadores matematicos** -------------------------------------------------

// const suma = 2 + 3
// const resta = 10 - 5
// const multiplicacion = 2 * 3
// const division = 9 / 3

// console.log(suma, resta, multiplicacion, division);

// Modulo divide y devuelve el numero sobrante
// const modulo = 10 % 3
// console.log(modulo);

// let num = 5 
// num++  // sirve para sumarle 1 a la variable
// num--  // sirve para restarle 1 a la variable
// num += 5 //sirve para sumarle la una cantidad necesaria en este caso le sumaria 5
// num -= 5 //sirve para restarle la una cantidad necesaria en este caso le sumaria 5
// num *= 5
// num /= 2

// console.log(num);

// ----------------------------------------------------------- **Operadores de comparacion** --------------------------------------

// const resultado1 = 5 === 6
// igualdad no estricta, strings pueden ser iguales a numeros si el valor es el mismo
// const resultado2 = 5 == '5'

// const resultado3 = 5 < 6
// const resultado4 = 5 < 5
// const resultado5 = 5 > 6
// const resultado6 = 5 > 4
// const resultado7 = 5 <= 5
// const resultado8 = 5 <= 6
// const resultado9 = 5 >= 5
// const resultado10 = 5 >= 6

// const resultado11 = 5 !== '5'
// const resultado12 = 5 != '5'

// console.log(resultado1, resultado2, resultado3, resultado4, resultado5, resultado6, resultado7, resultado8, resultado9, resultado10);

// ---------------------------------------------------------- **Operadores logicos** ----------------------------------------

// or ||, and &&, not !

// or || Evalua los TRU - tomando en cuenta que los STR sin TRU, los numero son TRU
//  const resultadoOr = false || true || fase

// and && Evalua los FALSE al consegui el primer valor FALSE se le asigna como valor a la variable

// const resultadoAnd = false && false && true

// Not ! da vuelta el valor, por ejmp: !true devuevle false y !false devuelve true

// --------------------------------------------------------- **contol de flujo!** -------------------------------------------------------
// control de flujo If

// const edad = 20

// if (edad > 5 && edad < 18) {
//      console.log('El niño puede jugar');
// } 
// else {
//      console.log('No puedes jugar');
// }
// console.log('Fin del programa!')

// ----------------------------------------------------- **Control de flujo While** --------------------------------------------------------

// let x = 0
// while (x < 5) {
//       console.log(x);
//       x++
//  }

// console.log('Ha termina el loop');

// --------------------------------------- **control de flujo - switch: permite ejecutar una instruccion u otra instruccion** --------------------

// let x = 10;
// switch (x) {
//      case 1: {
//           console.log('Este es el caso 1');
//           break;
//      }
//      case 2: {
//           console.log('Este es el caso 2');
//           break;
//      }
//      case 3: {
//           console.log('Este es el caso 3');
//           break;
//      }     

//      default:
//           console.log('Fuera de los casos');
//           break;
// }

// --------------------------------------------------------*** Control de flujo - For ***-------------------------------------------------------

// for (let i = 0; i < 10; i++) {
//      console.log(i);
// }

// -------------------------------------------------------** Funciones (function) ***-------------------------------------------------------------

// function iterar(arg1){
//      for (let i = 0; i < arg1.length; i++) {
//       console.log(arg1[i]);
//      }
// }
// const numeros = [1, 2, 3, 'Luis', 5]
// const nombres = ['karla', 'johan', 'jose', 'Luis','santiago']
// iterar(numeros)
// iterar(nombres)

// function suma(a, b) {
//   return a + b;
// }

// const resultadoSuma1 = suma(1, 2)
// const resultadoSuma2 = suma(5, 6)
// const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2)

// console.log('resultado', resultadoSuma3);

// ----------------------------------------------------------*** Callbacks ***----------------------------------------------------------

// function sumar(a, b, cb) {
//      const r = a + b;
//      cb(r)
// }

// function callback(i) {
//       console.log(i);
// }

// callback(6)

// callback(6)

// sumar(2, 3, callback)

// Otro ejemplo:

// function sumar (num1, num2){
//     return num1 + num2;
// }

// function restar (num1, num2){
//     return num1 - num2;
// }

// function multiplicar (num1, num2){
//     return num1 * num2;
// }

// function multiFuncion (num1, num2, callback){
//     const resultado = callback (num1, num2);
//     console.log(resultado)
// }

// multiFuncion (5, 4, sumar);
// multiFuncion (5, 4, restar);
// multiFuncion (5, 4, multiplicar);

// Otro ejemplo:

// const miBoton = document.getElementById("miboton");

// const callback = evento => {
//     console.log(evento);
//     alert('diste click en el boton');
// }

// miBoton.addEventListener("click", callback);



// ----------------------------------------------------------***  Fat Arrow Functions ***-----------------------------------------------------

// const funcionFlecha = (a, b) => a + b
// const r = funcionFlecha(5, 5)
// console.log(r);

// const otraFAF = (a, b) => {
//      return a + b
// }

// const a = otraFAF(5, 5)

// console.log(a);



// -------------------------------------------------------------*** Funcion Anonima ***-------------------------------------------------------------

// function sumar(a, b, cb) {
//      const r = a + b;
//      cb(r)
// }

// function callback(i) {
//      console.log(i);
// }

// callback(6)

// sumar(2, 3, function (r) {
//      console.log('soy una funcion anomina y mi resultado es: ', r)
// })
// ------------------------------------------------------------------------------------------------

// -------------------------------------------------------------*** Destucturacion ***-------------------------------------------------------------

// let miObjeto = {a:1,
//     b:2,
//     c:'hola',
//     d: function () {console.log('soy una funcion')},
//     e: true,
//    }

// let {a, b, c, d, } = miObjeto


// miArray = [1,2,'hola',function(){console.log('soy una funcion')},true]   //para los array se destructura de forma ordenada para los objetos no.

// let [uno,dos,hola,miFuncion,bulean] = miArray

// uno
// dos
// hola
// miFuncion
// bulean
// -------------------------------------------------------------*** Promesas ***-------------------------------------------------------------

const fabricaDePromesa = (indice) =>
 new Promise ((resolve, reject) => {
    const tiempoRejected = Math.floor(Math.random() * 10000) + 1000
    const tiempoResolved = Math.floor(Math.random() * 10000) + 1000

    setTimeout(()=>{
        reject(`la promesa ${indice} fallo`)
    }, tiempoRejected)

    setTimeout(()=>{
        resolve(`promesa ${indice} satisfecha`)
    },tiempoResolved)
})

let misPromesas = []
for (let i = 0; i < 10; i++){
    misPromesas = [...misPromesas, fabricaDePromesa(i)]
}

Promise.allSettled(misPromesas).then(respuesta => console.log(respuesta))
