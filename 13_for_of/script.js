//      'for of'      //

// O statement 'for of' percorre os valores de um objeto iterável. Ele permite que você faça um Loop sobre estruturas de dados iteráveis, como Arrays, Strings, Maps, NodeLists emuito mais:
/*
          for('variável' of 'iterável) {
            //bloco de código a ser executado.
          }

      'variável': Para cada iteração, o valor da próxima propriedade é atribuído à variável. A 'variável pod ser declarada com const, let ou var;

      'iterável': Um objeto que tem propriedades iteráveis.
*/

//Loop sobre um Array:
const carros = ["BMW", "Audi", "GMC", "Tesla", "JEEP"];
let text = "";
for (let x of carros) {
  text += x + "<br>";
}
document.getElementById("dem").innerHTML = text;

//Loop sobre uma String:
let linguagem = "JavaScript";
let text2 = "";
for (let x of linguagem) {
  text2 += x + "<br>";
}
document.getElementById("dem2").innerHTML = text2;
