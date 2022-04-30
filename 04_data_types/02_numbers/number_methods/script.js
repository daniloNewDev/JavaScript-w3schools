//Métodos e Propriedades  uméricas ajudam a trabalhaar com números.

//Valores primitivos como o "pi 3.14" ou "2014" não podem ter propriedades ou métodos porque não são objetos.
//Entretanto, com o JavaScript, métodos e propriedades também estão disponíveis para valores primitivos, porque o JavaScript trata valores primitivos como objetos ao executar métodos e propriedades.

let x = 123;

console.log(x.toString());
//      O método 'toString()' retorna o valor de um number em uma string.

let exp = 9.656

console.log(exp.toExponential(2))
console.log(exp.toExponential(4))
//      O métod 'toExponential()' retorna uma string com o número arredondado e acompanhado de uma notação exponencial.

console.log(exp.toFixed())
console.log(exp.toFixed(2))
//      O método 'toFixed()' retorna uma string com um número especificado de decimais.
//              'toFixed()' com o parâmetro 2 ´2 ideal para calcular expressões de dinheiro.


//      'Number()', 'parseIt()' e 'parseFloat()':

//Existem 3 métodos JavaScript que podem ser usados para converter variáveis em números. Não são métodos numéricos, são métodos JavaScript globais.

//Number():
console.log(Number(true))
console.log(Number(false))
console.log(Number("10"))
console.log(Number("   10"))
console.log(Number("10.33"))
console.log(Number("10,33"))
console.log(Number("10 33"))
console.log(Number("Moshe"))

//caso o número não tenha condições de ser convertido, o método retorna 'NaN'.


//'parseInt()':
console.log(parseInt("-10"))
console.log(parseInt("-10.33"))
console.log(parseInt("10"))
console.log(parseInt("10.33"))
console.log(parseInt("10 6"))
//parseInt() analisa uma string e retorna um número inteiro. Espaços são permitidos, porém o método só retorna o primeiro valor informado.
console.log(parseInt("10 years"))


//'parseFloat()':
console.log(parseFloat("10"))
console.log(parseFloat("10.33"))
console.log(parseFloat("-10.33"))
console.log(parseFloat("10 years"))