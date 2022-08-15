//NICOLÁS GAZZOLO VARELA A01339945

const calculadora = require('./mate')
const prompt = require('prompt-sync')() //El modulo prompt-sync es el que permite pedirle al usuario un input, se requiere instalar el modulo con "npm install prompt-sync"

console.log("********************")
console.log("*    CALCULADORA   *")
console.log("*  1. Sumar        *")
console.log("*  2. Restar       *")
console.log("*  3. Multiplicar  *")
console.log("*  4. Dividir      *")
console.log("*  5. Módulo       *")
console.log("*  0. SALIR        *")
console.log("********************")

const opcion = prompt('Escoga una opción del menú de la calculadora ')
    switch (opcion){
        case "1":
            const num1 = prompt('Introduzca el primer número: ')
            const num2 = prompt('Introduzca el segundo número: ')
            res1 = calculadora.suma(parseInt(num1),parseInt(num2))
            console.log("El resultado es ", res1)
            break
        case "2":
            const num3 = prompt('Introduzca el primer número: ')
            const num4 = prompt('Introduzca el segundo número: ')
            res1 = calculadora.resta(parseInt(num3),parseInt(num4))
            console.log("El resultado es ", res1)
            break
        case "3":
            const num5 = prompt('Introduzca el primer número: ')
            const num6 = prompt('Introduzca el segundo número: ')
            res1 = calculadora.producto(parseInt(num5),parseInt(num6))
            console.log("El resultado es ", res1)
            break
        case "4":
            const num7 = prompt('Introduzca el primer número: ')
            const num8 = prompt('Introduzca el segundo número: ')
            res1 = calculadora.division(parseInt(num7),parseInt(num8))
            console.log("El resultado es ", res1)
            break
        case "5":
            const num9 = prompt('Introduzca el primer número: ')
            const num10 = prompt('Introduzca el segundo número: ')
            res1 = calculadora.modulo(parseInt(num9),parseInt(num10))
            console.log("El resultado es ", res1)
            break  
}

