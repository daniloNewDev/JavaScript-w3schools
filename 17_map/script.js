//        'map()'        //

//Um Map contém pares de 'key-value' em que as chaves podem se de qualquer tpo de dado. Um Map lembra a ordem de inserção original das chaves;

/*
          //   Métodos essenciais de 'Map()' //

          'new Map()':
               cria um novo Map
          'set()':
               define o valor de uma key em um Map
          'get()':
               obtém um valor de uma key em um Map
          'delete()':
               remove um elemento Map especificado pela key
          'has()':
               retorna 'true' se existir uma key em um Map
          'forEach()':
               chama uma finção para cada par 'key/value' em um Map
          'entries()':
               retorna um iterador com os pares [chave, valor] em um Map
          
               //   Propriedade de Map  //
          'size':
               retorna o número de elementos em um Map.
*/

//        'new Map()'         //
const ivrit = new Map([
  ["alef", 1],
  ["beit", 2],
  ["guimel", 3],
  ["dalet", 4],
]); //     Criando um Map a partir de um Array.
console.log(ivrit);

//

//   'set()' adicionando novos elementos:
ivrit.set("hei", 5);
ivrit.set("vav", 5); //o erro será alterado com 'set()' a seguir
console.log(ivrit);
//   'set()' pode ser usado para alterar valores existentes em um Map:
ivrit.set("vav", 6);
console.log(ivrit);

//

//   'get()' obtendo o valor de uma 'key';
console.log(ivrit.get("alef"));
console.log(ivrit.get("beit"));
console.log(ivrit.get("guimel"));

//

//   'delete()' apaga elementos de um Map:
ivrit.delete("vav");
console.log(ivrit);

//

//   'has()' retornando 'true' se houver a key específica, ou 'false' se não houver esta key no Map:
console.log(ivrit.has("hei"));
console.log(ivrit.has("vav"));

//

//   'forEach()' chamando uma função para cada par key/value em um Map:
let textFEach = "";
ivrit.forEach(function (value, key) {
  textFEach += key + " = " + value + " ";
});
console.log(textFEach);

//

//   'entries()' retorna um objeto iterador com a [key, value] em um Map:
let textEntries = "";
for (const x of ivrit.entries()) {
  textEntries += x + "; ";
}
console.log(textEntries);
