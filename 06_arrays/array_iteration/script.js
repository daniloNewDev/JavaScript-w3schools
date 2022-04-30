//Métodos de iteração do array operam em cada item do array:

//'forEach()':
const numeros = [45, 4, 7, 18, 38]
let text = ""
numeros.forEach(myFunction)
document.getElementById("demostr").innerHTML = text

function myFunction(value, index, array) {
     text += value + ", "
     //3 argumentos; Valor do item, índice do item, e o array.
}

//

//O método 'map()' cria um novo array executando uma função em cada elemento do array:
const num = [45, 4, 7, 18, 48, 3, 9, 17]
const numDobrado = num.map(function (elem) {
     return elem * 2
})
//Neste caso, a função multiplica cada valor por 2.
console.log(numDobrado)

//

//O método 'filter()' cria um novo array com os elementos de um outro array que passam por um teste:
const menoresQueVinte = num.filter(menoresFunc)
function menoresFunc(value, index, array) {
     return value < 20
}//Neste exemplo não foram utilizados os parâmetros "index" e "array".
console.log(menoresQueVinte)

//

//O método 'reduce()' executa uma função em cada elemento do array, para reduzi-lo em um único valor:
const pontos = [30, 12, 5, 42, 8, 91]
const pontosReduced = pontos.reduce(reduzir)

function reduzir(total, value, index, array) {
     return total + value
}//Neste caso os parâmetros usados foram somente o "total" e "value";
console.log(pontosReduced)

//

//O método 'every()' verifica todos os valores de um array e retorna um boolean:
const menoresQueTrinta = pontos.every(checarMenorValor)
function checarMenorValor(value, index, array) {
     return value < 30
}//Neste caso foi usado somente o parâmetro value;
console.log(menoresQueTrinta)

//

//O método 'some()' verifica se alguns valores passam pelo teste e retorna um boolean:
const pontosMenoresTrinta = pontos.some(algumMenorTrinta)
function algumMenorTrinta(value, index, array) {
     return value < 30
}
console.log(pontosMenoresTrinta)

//
