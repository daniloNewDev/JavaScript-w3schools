/*
    'indexOf()'
    'lastIndexOf()'
    'startsWith()'
    'endsWith()'
*/

//Métodos de pesquisa de 'Strings' JavaScript

let frase = `Ouça, Israel. HShem é o teu Eterno, HShem é Único!`

//'indexOf()' e 'search()':
console.log(frase.indexOf("Israel"))
    //Retorna o index (da posição) do primeiro caractere do parâmetro especificado no 'indexOf()'.

//'indexOf()' com um segundo argumento:
console.log(frase.indexOf("HShem", 20))
    //É possível atribuir um segundo argumento, determinando uma posição inicial:

//'search()'
console.log(frase.search("Israel"))
    //O método 'search()' não recebe um segundo argumento.


//


//'lastIndexOf()':
console.log(frase.lastIndexOf("HShem"))
    //Retorna o index (da posição) do último caractere do parâmetro especificado no método 'lastIndexOf()'.

//'match()':
console.log(frase.match(/te/g))
    //  O 'match()' pesquisa em uma 'string' por uma correspondência com experssão regular e retorna  as correspondências em formato 'array'.
console.log(frase.match(/te/gi))
    //          Para executar uma pesquisa sem distinção de letras maiúsculas e minúsculas é utilizado o "g" e o "i", como no exemplo acima.

//'includes()':
console.log(frase.includes("Único"))
    //O método 'includes()' retorna um valor 'true' exista o valor especificado, e retorna 'false' caso o valor especificado não exista.
console.log(frase.includes("HShem", 20))
    //Também é possível incluir um segundo argumento, como no exemplo de 'indexOf()', determinando uma posição inicial.

//

//'startsWith()':
console.log(frase.startsWith("Ouça"))
    //Retorna um 'true' caso a 'string' inicie com o valor especificado como parâmetro, e retorna 'false' caso a 'string' não inicie com este valor específico.

//endsWith()':
console.log(frase.endsWith("Único!"))
    //Retorna um 'true' caso a 'string' termine com o valor especificado como parâmetro, e retorna 'false' caso a 'string' não termine com este valor específico.

console.log(frase.startsWith("HShem", 36))
console.log(frase.startsWith("HShem", 30))
    //É possível atribuir um segundo parâmetro para determinar uma posição inicial.