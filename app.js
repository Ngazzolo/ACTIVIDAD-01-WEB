//NICOLÁS GAZZOLO VARELA A01339945

const calculadora = require('./mate')
const prompt = require('prompt-sync')() //El modulo prompt-sync es el que permite pedirle al usuario un input, se requiere instalar el modulo con "npm install prompt-sync"

var activo = false //activo controlara la salida de la calculadora

while (!activo) {

console.log("********************")
console.log("*    CALCULADORA   *")
console.log("*  1. Sumar        *")
console.log("*  2. Restar       *")
console.log("*  3. Multiplicar  *")
console.log("*  4. Dividir      *")
console.log("*  5. Módulo       *")
console.log("*  6. SALIR        *")
console.log("********************")

    const opcion = prompt('Escoga una opción del menú de la calculadora ')

    switch (opcion){
        case "1":
            var num1 = prompt('Introduzca el primer número: ')
            var num2 = prompt('Introduzca el segundo número: ')
            res1 = calculadora.suma(parseInt(num1),parseInt(num2))
            console.log("El resultado es ", res1)
            var salida = prompt('Quiere volver a hacer otra operación ? 1 = si // 0 = no ')
            if (salida == 1){
                activo = false
                break
            } else{
                activo = true
                break
            }
        case "2":
            var num1 = prompt('Introduzca el primer número: ')
            var num2 = prompt('Introduzca el segundo número: ')
            res1 = calculadora.resta(parseInt(num1),parseInt(num2))
            console.log("El resultado es ", res1)
            var salida = prompt('Quiere volver a hacer otra operación ? 1 = si // 0 = no ')
            if (salida == 1){
                activo = false
                break
            } else{
                activo = true
                break
            }
        case "3":
            var num1 = prompt('Introduzca el primer número: ')
            var num2 = prompt('Introduzca el segundo número: ')
            res1 = calculadora.producto(parseInt(num1),parseInt(num2))
            console.log("El resultado es ", res1)
            var salida = prompt('Quiere volver a hacer otra operación ? 1 = si // 0 = no ')
            if (salida == 1){
                activo = false
                break
            } else{
                activo = true
                break
            }
        case "4":
            var num1 = prompt('Introduzca el primer número: ')
            var num2 = prompt('Introduzca el segundo número: ')
            res1 = calculadora.division(parseInt(num1),parseInt(num2))
            console.log("El resultado es ", res1)
            var salida = prompt('Quiere volver a hacer otra operación ? 1 = si // 0 = no ')
            if (salida == 1){
                activo = false
                break
            } else{
                activo = true
                break
            }
        case "5":
            var num1 = prompt('Introduzca el primer número: ')
            var num2 = prompt('Introduzca el segundo número: ')
            res1 = calculadora.modulo(parseInt(num1),parseInt(num2))
            console.log("El resultado es ", res1)
            var salida = prompt('Quiere volver a hacer otra operación ? 1 = si // 0 = no ')
            if (salida == 1){
                activo = false
                break
            } else{
                activo = true
                break
            }
        case "6":
            activo = true
            break
                  
}
}



