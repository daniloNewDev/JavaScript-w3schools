//Métodos 'array'
const frutas = ["banana", "limão", "kiwi", "uva"];

//O método 'toString() converte um array em uma String de valores de array:
console.log(frutas.toString());

//O método 'Join()' também converte um array em uma String de valores de array, porém retorna separando os elementos, conforme atribuído no parâmetro do método:
console.log(frutas.join(", "));

//Os método 'pop()' e 'push()' retira ou envia itens a um array:
console.log(frutas.pop());
//    retornando o último item do array;
frutas.push("laranja");
console.log(frutas);
console.log(frutas.push());

//

//O método 'shift()' desloca o primeiro elemento do array e retorna o valor que foi deslocado:
console.log(frutas);
console.log(frutas.shift());

//O método 'unShift()' realoca um item no array, deslocando os elementos antigos:
frutas.unshift("pêra");
console.log(frutas);
console.log(frutas.unshift());

//Propriedade 'length':
console.log(frutas[0]);
//Usando "nomeDoArray[nomeDoArray.length]" é possível adicionar um novo item.
frutas[frutas.length] = "goiaba";
console.log(frutas);

//

//O método 'concat()'cria um novo array mesclandoarrays existentes:
const legumes = ["batata", "alho", "verduras", "sacolas"];
const lanche = ["pasteis", "caldo-de-cana", "refri", "molho"];
const minhaFeira = frutas.concat(legumes, lanche); //arrays como parâmetros.
console.log(minhaFeira);
//É possível concatenar um item em um array:
const chords = ["do", "re", "sol", "la"];
const seqChords = chords.concat("si");
console.log(seqChords);

//

//O método 'splice()' adiciona novos itens em um array, com parâmetros que definem a posição(index) e a quantidade de elementos a serem extraídos, além de itens a serem inseridos no vetor:
seqChords.splice(2, 0, "mi", "fa");
console.log(seqChords);
//          O parâmetro "2" determina o index da posição dos novos itens;
//          O parâmetro "0" determina quantos itens serão removidos.
seqChords.splice(2, 2, "mi menor", "fa menor");
console.log(seqChords);

//Remover itens com o 'splice()':
seqChords.splice(0, 2);
console.log(seqChords);

//

//O método 'slice()' retira um pedaço de um array e retorna um novo array:
const pecas = ["ponta", "cabo", "alça", "alicate", "fenda", "philips"];
const semMaterial = pecas.slice(2); //Extraindo a partir do index "2";
console.log(semMaterial);
//O 'slice(2, 4)' recebe um parâmetro que determina o início e outro que determina um final:
const poucaFerr = pecas.slice(2, 4);
console.log(poucaFerr);
