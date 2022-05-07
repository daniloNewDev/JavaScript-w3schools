const num1 = [45, 61, 13, 27, 9, 352]
const num2 = num1.map(myFunction)

document.getElementById("exemplo").innerHTML = num2

function myFunction(value, index, array) {
     return value * 2
}
//O método 'map()' contém pares 'key-value em que essas keys podem ser de qualquer tipo de valor;

//É possível criar um map JavaScript:

//        passando um array para "new Map()";
const frutas = new Map([
     ["maça", 500],
     ["banana", 300],
     ["laranja", 300]
])
//        Criando um map usando o "Map.set()";