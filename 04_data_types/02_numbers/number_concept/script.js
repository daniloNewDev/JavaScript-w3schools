console.log(typeof(2 + 3));
console.log(typeof(5 - 12));
console.log(typeof(4 * 4));
console.log(typeof(5 / 3));
console.log(typeof(20 % 2));
console.log(typeof(21 % 2));

//Em JavaScript só existe um tipo de número. O números podem ser escritos com ou sem decimais.
let x = 3.14
let y = 3



//Números grandes ou extra-pequenos podem ser escritos com notação científica (expoente):
let a = 123e5
console.log(a)
let b = 123e-5
console.log(b)

//      Números em JavaScript são sempre ponto flutuante de 64 bits.
let k = 999999999999999 // Com 15 dígitos
let l = 9999999999999999 //A partir de 16 dígitos até 17, no máximo.
    //Os Números Inteiros são precisos até 15 dígitos, sem notação de expoente e sem ponto
console.log(k)
console.log(l)

//

//Adição e Concatenação:
//      O operador "+" é utilizado em JavaScript para adição e concatenação. Deste modo podemos afirmar que no caso de valores 'Strings' o operador executa concatenação, já no caso de valores 'Numbers' o operador excuta soma.

let r = "75"
let s = "43"
let t = "5"
console.log(r + s)
    //      Neste exemplo acima é possível entender que ocorreu uma concatenação dos valores de r e s.

console.log(r - s)
console.log(r / t)
console.log(s * t)
console.log(t ** 2)
console.log(s % t)
    //No caso dos outros operadores, o JavaScript sempre que possível converterá strings em numbers dentro das expressões numéricas, como no exemplo acima.

//

//'NaN'
let oNome = "nome"
let naoNum = 100 / "nome"
console.log(naoNum)
    //      'NaN' significa "Not a Number", 'palavra reservada' a qual indica que não é um número legal. No exemplo a cima a operação de divisão é invalidada com o valor 'NaN' por conta do valor "nome" não ser número válido para uma operação aritmética.

//'isNaN():
console.log(isNaN(oNome))
console.log(isNaN(s))
    //      Neste exemplo acima 'isNaN()' retorna true para a variável 'oNome' que tem valor 'string', enquanto para a variável "s" que tem valor 'number' retorna 'false'.