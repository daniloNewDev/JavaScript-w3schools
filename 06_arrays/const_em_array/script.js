//

/////////////////////    const de Array      ////////////////////////
/*
          Em 2015, a JavaScript introduziu uma 'key-word' importante para a
     linguagem que é a palavra 'const'. Tonou-se desde então uma prática 
     comum declarar 'Arrays' usando 'const':
*/
const cars = ["BMW", "Audi", "GMC"]
//   Um Array declarado com 'const' não pode ser reatribuído.
console.log(cars)

////////////////      Arrays não são constantes     /////////////////
/*
          A 'key-word' 'const' é um pouco enganosa, pois na prática ela NÃO
     define um Array constante. 'const' define uma referência constante  para
     um Array.
          Portanto é possível alterar os elementos de um Array constante,
     como no exemplo a seguir:
*/

//Mudando o primeiro elemento, usando "array[index]":
cars[0] = "Toyota"
console.log(cars)

//Adcionando elementos, usando 'array.push("elemento")':
cars.push("Chrisler")
console.log(cars)

//

////////////////    Escopo do Bloco 'const'     ///////////////
/*
          Um Array declarado com 'const' tem um Block Escope, portanto um
     Array declarado em um bloco não é o mesmo que um Array declarado fora
     do bloco:
*/

//Aqui fora do bloco:
const motos = ["honda", "yamaha", "dafra"]
{
     //Aqui dentro do bloco:
     const motos = ["honda", "yamaha", "bmw"]
     console.log(motos)
}
console.log(motos)
/*   
          Obs.: Um Array declarado com 'var' NÃo tem 'Escope Block'.

          Redeclarar ou redefinir um Array declarado com 'const' em um
     mesmo bloco NÃO é permitido, gerando um erro.
*/
