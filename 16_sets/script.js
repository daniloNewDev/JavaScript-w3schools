//      'Sets'      //

//  Um 'Set' é uma coleção de valores exclusivos. Cada valor só pode ocorrer uma vez em um 'set':
/*

    ////    Métodos essenciais de 'Set':    ////

      'new Set()':
          cria um novo 'Set'

      'add()':
          adiciona um novo elemento ao 'Set'

      'delete()':
          remove um elemento de um 'Set'

      'has()':
          retorna 'true' se existir um valor específico no 'Set'

      'forEach()':
          invoca um retorno de chamada para cada elemento no 'Set'

      'values()':
          retorna um iterador com todos os valores em um 'Set'

    
    ////    Propriedade de 'Set'    ////

      'size':
      retorna o número de elementos em um 'Set'.
*/

//  'new Set()':
const letras = new Set(["a", "b", "c", "d"]);
console.log(letras);
//    cria um novo Set(array);

////////////////////////////////////////////////////

//  'add()':
letras.add("e", "f");
console.log(letras);
//  adicionando variáveis com 'add()':
const ivrit = new Set();

const primLetra = "alef";
const seguLetra = "beit";
const tercLetra = "guimel";
const quarLetra = "dalet";
const quinLetra = "hei";
const sextLetra = "vav";

ivrit.add(primLetra);
ivrit.add(seguLetra);
ivrit.add(tercLetra);

console.log(ivrit);
//    retorna os valores das variáveis no console.log();
ivrit.add(quarLetra);
ivrit.add(quinLetra);
ivrit.add(quarLetra);
ivrit.add(sextLetra);
//    Caso o Dev adicione valores repetidos, apenas o primeiro será salvo no 'Set':
console.log(ivrit);

//////////////////////////////////////////////////////

// 'forEach':
let text = "";
ivrit.forEach(function (value) {
  text += value + " "; // repete na string o valor de cada variável
});
//  O método chama uma função para cada elemento 'Set'
console.log(text);

////////////////////////////////////////////////////////

//  'values()'
console.log(ivrit.values());
//    Neste console.log() o retorno é um objeto iterador;
let textVal = "";
for (const x of ivrit.values()) {
  textVal += x + " ";
}
/*
      for('variável' of 'ivrit.values()') {
        //bloco de código a ser executado.
      }
*/
console.log(textVal);
//  Por meio de um 'for of', no lugar do objeto iterável é colocado o 'ivrit.values()'.
