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

//O método 'indexOf()' procura o valor de um item em um array e retorna seu index(posição):
const pecas = [2, 54, 85, 1, 8, 19, 54, 22]
console.log(pecas.indexOf(8))
//O método 'lastIndexOf()' retorna a posíção da última ocorrência do item dentro do array:
console.log(pecas.lastIndexOf(54))

//

//O método 'find()' retorna o valor do primeiro item que passa por um teste(boolean):
let ultMaior = pecas.find(lastBigger)

function lastBigger(value, index, array) {
     return value > 60
}
console.log(ultMaior)

//

//O método 'findIndex()'retorna o index(poisção) do primeiroitem do Array que passa pelo teste(boolean):
const chaves = [3, 5, 91, 12, 43, 231]
let encontChave = chaves.findIndex(encontrarIndex)
function encontrarIndex(value, index, array) {
     return value > 100
}
console.log(encontChave)

//

//O método 'keys()' retorna um Objeto Array iterador com as chaves de um Array:
const feira2 = ["banana", "limão", "laranja", "uva"]
const keys = feira2.keys()
let texto = ""
for (let h of keys) {
     texto += h + "<br>"
}
document.getElementById('demostr2').innerHTML = texto

//

//O método 'entries()'itera os item sobre os pares de chave/valor:

const feira3 = ["banana", "limão", "laranja", "uva"]
const f = feira3.entries()

for (let j of f) {
     document.getElementById('demostr3').innerHTML += j + "<br>"
}

//

//O método 'includes()', recentemente intraduzido no ECMAScript 2016, em arrays permite verificar se um elemento está presente em um array(incluindo NaN, ao contrário de 'indexOf()'):

console.log(feira3.includes("limão"))

