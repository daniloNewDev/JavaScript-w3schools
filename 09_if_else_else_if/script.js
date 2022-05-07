////////    'if', 'else' e 'else if'    ////////

//As instruções condicionais são usadas para executar diferentes ações com base em diferentes condições.

//    Declarações condicionais:

//  Muitas vezes, quando um código é escrito com intenção de executar diferentes decisões, é necessário usar as intruções condicionais para fazê-lo:

//    Declaração 'if':
//  Usada para expecificar um bloco de código a ser executado se uma condição for verdadeira:
const person = {
  nome: "Danilo",
  sNome: "Leite",
  idade: 36,
};

if (person.nome == "Danilo" && new Date().getHours() < 12) {
  document.getElementById("dem").innerHTML = `Bom dia, ${person.nome}!`;
}

//

//  'else'  //

//  A declaração 'else' é utilizada para especificar um bloco de código a ser executado se a condição for falsa:

//  Exemplo:

//se a hora atual for menor que 18, crie uma saudação "Boa tarde", caso contrário, "Boa noite":

if (new Date().getHours() < 18) {
  document.getElementById("dem2").innerHTML = `Boa tarde, ${person.nome}!`;
} else {
  document.getElementById("dem2").innerHTML = `Boa noite, ${person.nome}!`;
}

//

//    'else if'   //

//  A instrução 'else if' serve para expecificar uma nova condição se a primeira condição for falsa:

if (new Date().getHours() < 12) {
  document.getElementById("dem3").innerHTML = `Bom dia, ${person.nome}!`;
} else if (new Date().getHours() < 18) {
  document.getElementById("dem3").innerHTML = `Boa tarde, ${person.nome}!`;
} else {
  document.getElementById("dem3").innerHTML = `Boa noite, ${person.nome}!`;
}
