//    'for/in'    //

//  'for in' percorre as propriedades de um objeto:
/*
      for('chave' in 'objeto') {
        // código a ser executado
      }
*/
const person = {
  nome: "Danilo",
  sNome: "Leite",
  idade: 36,
};
let text = "";
for (let x in person) {
  text += person[x] + " ";
}
document.getElementById("dem").innerHTML = text;

//  O Loop 'for in' itera sobre um objeto de "perspn", cada iteração retorna uma chave (x). A chave é usada para acessar o valor da chave. O valor da chave é person[x].

//

//      'for in' em Arrays      //

const num = [43, 5, 17, 56, 39, 7, 10];
let text2 = "";
for (let x in num) {
  text2 += num[x] + "<br>";
}
document.getElementById("dem2").innerHTML = text2;
//  No caso de haver importância na ordem do index do Array, é recomendado usar 'array.forEach()':
let text3 = "";
num.forEach(myFunction);
document.getElementById("dem3").innerHTML = text3;

function myFunction(value, index, array) {
  text3 += index + " index=:" + value + "<br>";
} /*A função recebe 3 argumentos:
      value: valor do intem;
      index: o index de itens;
      array: nome do array em questão.
  */
