//O método 'array.sort()' classifica um array em ordem alfabética.

const frutas = ["limão", "manga", "abacaxi", "banana", "goiaba"]
console.log(frutas.sort())
//Com o método reverse é possível inverter a ordem de um array:
const frutasEmOrdem = frutas.sort()
console.log(frutasEmOrdem.reverse())

//No caso de números, o método 'sort()' pode comportar-se de maneira inesperada:
const num = [231, 49, 5, 2, 56, 82]
console.log(num.sort())
//Neste exemplo abaixo o item 231 aparece no index 1 porque o método 'sort()' analisa o primeiro index como parâmetro de ordem alfabética;
const numOrder = num.sort(function(a, b){return a - b})
console.log(numOrder)
//ou então de forma decrescente:
const numDecres = num.sort(function(a, b){return b - a})
console.log(numDecres)

//       Função numérica de comparação do 'sort()':

//       sort(function(a,b){return a - b})
//       sort(function(a,b){return b - a})

//

//Não funções incorporadas para encotrar o valor máximo ou mínimo em um Array. Entretanto, depois de classificar o Array é possível obter o valor mais alto e o mais baixo:
const numeros = [39, 18, 394, 36, 29, 135, 1, 900]
numeros.sort(function(a, b){return a - b})
//Menor valor:
console.log(numeros[0])
//Maior valor:
numeros.sort(function(a, b){return b - a})
console.log(numeros[0])

//

//Classificando Array de objetos:
const carros = [
   {marca:"GMC", ano:2016},
   {marca:"VW", ano:2010},
   {marca:"Audi", ano:2018}
]
carros.sort(function(a, b){return a.ano - b.ano})
console.log(carros)