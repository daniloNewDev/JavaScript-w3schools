//      'typeof'      //

//  Em JavaScript existem 5 tipos de dados diferentes que podem conter valores:

//  'string'
const frase = "Shalom, L'Olam!";

//  'number'
const num = 123;

//  'boolean'
console.log(num == 123);

// 'object'
const usuario = {
  nome: "Danilo",
  sNome: "Leite",
  idade: 36,
};

//  'function'
function userData(x) {
  return (
    frase +
    " " +
    `Meu nome é ${x.nome + " " + x.sNome}, e a idade é ${x.idade} anos!`
  );
}
console.log(userData(usuario));

//////////////////////////////////////////////

//  Existem 6 tipos de 'objects':

//  'Object'
//  'Date'
//  'Array'
//  'String'
//  'Number'
//  'Boolean'

//////////////////////////////////////////////

//  E existem 2 tipos de dados que não podem conter valores:

//  'null'
//  'undefined'

//  é possível usar o operador 'typeof' para localizar o tipo de dado de uma variável JavaScript:

console.log(typeof frase);
console.log(typeof num);
console.log(typeof (231 == String));
console.log(typeof ["alef", "beit", "guimel"]);
console.log(typeof usuario);
console.log(typeof userData);
console.log(typeof mention);
console.log(typeof NaN);
console.log(typeof null);
console.log(typeof "Shalom, Aleichem!");

//  Não é possível usar o 'typeof()' para determinar se um Object é um Array, ou um Date.

//      'Primitive Data'    //

// Um valor de Dados primitivo é um único valor de dado simples, sem propriedade e sem métodos adicionais.
/*
      O operator 'typeof()' pode retornar um destes tipos primitivos:
    'string'
    'number'
    'boolean'
    'undefined'
*/

//      'Complex Data'      //

/*
    O 'typeof()' pde retornar um de dois tipos de dados complexos:

        'function'
        'object'

    O operator 'typeof()' retorna "object" para Objects, Arrays e null
*/
console.log(typeof { name: "Danilo", age: 36 });
//  Retorna 'object' em Array porque Array é um Object:
console.log(typeof ["Shalom", "L'Olam", "Ani Danilo"]);
console.log(typeof null);
console.log(typeof function nameAge(x) {});

//  O operador 'typeof()' não é uma variável, É UM OPERADOR. Os operadores (+, -, typeof(), <, >, ==, ===, &&, ||) não possuem nenhum tipo de dado.

console.log(typeof userData);
//  Apesar de não obter um tipo de dado, o 'typeof()' RETORNA uma String, contendo o tipo do operando.No exemplo acima o operando é userData typeof(operando)).

//////////////////////////////////////////////////////

//      'Propriedade Constructor'     //

//  A propriedade 'constructor' retorna uma função construtora para todas as variáveis JavaScript
console.log(usuario.nome.constructor);
console.log(num.constructor);
console.log(false.constructor);
console.log([1, 2, 3].constructor);
console.log(usuario.constructor);
console.log(new Date().constructor);
console.log(function () {}.constructor);
