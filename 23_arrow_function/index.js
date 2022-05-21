//      Arrow Function      //

//  Arrow Function foi introduzida no ES6. As funções Arrow permitem o usuário escrever uma sintaxe de função mais curta.

let multiplicar = (a, b) => a * b;
//Uma função antes do ES6 tinha a sintaxe:
let helloAntes = function () {
  return "Hello World!";
};
//Agora també pode ser excrita com a sintaxe de Arrow Function:
let helloArrow = () => {
  return "Hello World!";
};
//Esta palavra-chave "return" pode ser removida caso haja somente uma instrução no bloco de nota, e que retorne apenas um valor:
let helloNoReturn = () => "Hello World!";

//  Parâmetros são passados entre parenteses, caso haja somente um parâmetro, é possível eliminar os parenteses:
let name = "Danilo";
//let helloName = name => `Hello ${name}.`;
console.log();
