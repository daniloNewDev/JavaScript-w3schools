//O Operadores no JavaScript são usados para atribuir valores, coparar valores, realizar operações lógicas, operações aritiméticas e muitas outras;

//1.1 Operadores Aritiméticos.

//Operadores Aritiméticos são usados para realizar operações matemáticas como + soma, - subtração, * multiplicação, / divisão, % modulação, ++ incrementação e -- decrementação, entre variáveis e/ou valores:

let x = 10
let y = 5

let s = x + y //Soma
console.log(s)

let sub = x - y //Subtração
console.log(sub)

let d = x / y //Divisão
console.log(d)

let m = x * y //Multiplicação
console.log(m)

let mod = x % y //Modulus
console.log(mod)

let i = x++ //Incrementação
    let i1 = ++x //Incrementação
console.log(i)
console.log(i1)

let dec = y-- //Decrementação
    let dec1 = --y //Decrementação
console.log(dec)
console.log(dec1)


//
//1.2 Operadores de Atribuição.

//Operadores de Atribuição são usados para atribuir valores a variáveis com o sinal "=" de igual que designa o valor da variável junto com uma operação aritimética, +, -, /, *, %:

let atribSoma = x += y
console.log(atribSoma)

let atribMult = x *= y
console.log(atribMult)
    //
    //1.2.1 Operadores de String.

//O operador + e o operador - também podem ser usados para concatenar strings!

let frase1 = "Shalom"
let frase2 = "Mah ShalomChah?"
let nome = "Danilo"
let saudacao = frase1 + ', ' + nome + '! ' + frase2

console.log(saudacao)


//
//1.3 Operadores de Comparação.

//Operadores de Comparação são usados em instruções lógicas pra determinar a igualdade ou diferenteça entre variáveis ou valores com os operadores == igual a, === valores e tipos iguais, != não igual(ou diferente), !== não igual a valor e não igual a tipo, > maior que, < menor que, >= maior ou igual a, <=menor ou igual a:

let comp = 5
console.log(comp == "5")
console.log(comp === 5)
console.log(comp != "5")
console.log(comp !== "5")
console.log(comp > 2)
console.log(comp < 2)
console.log(comp >= 5)
console.log(comp <= 4)


//
//1.4 Operadores Lógicos.

//Operadores Lógicos são usados prar determinar a lógica entre variáveis ou valores com os operadores "&&" and; "||" or; "!" not:


console.log(5 > 3 && 3 == 2);
console.log(5 > 3 && 3 == 2);

console.log(5 > 3 || 3 == 1);
console.log(3 == 3 || "Danilo" == "Danilo");

console.log(!(3 == 3 && "Danilo" == "Moshe"));
console.log(!(true && 3 == 3));


//
//1.5 Operadore typeof.

//Operador typeof retorna o tipo de uma variável, objeto, função ou expressão:

console.log(typeof(nome))
console.log(typeof(NaN))
console.log(typeof(x))
console.log(typeof(false))
console.log(typeof(null))
console.log(typeof([9, 4, 2, 5]))
console.log(typeof(function() {}))
console.log(typeof(teclado))


//
//1.6 Operador Delete.

//O Operador Delete exclui o valor da propriedade e a própria propriedade também;

const person = {
    firstName: "Moshe",
    lastName: "ben Adam",
    age: 50,
    eyeColor: "brown"
}
delete person.age

console.log(person)
    //Obs.:
    //Após a exclusão, a propriedade não pode ser usada enquanto não for adicionada novamente;
    //O delete foi projetado para ser usado em propriedades de objeto. Não tem efeito sobre variável ou funções.


//
//1.7 Operador 'in'.

//O Operador 'in' retorna um Boolean 'true' se uma determinada propriedade estiver no objeto especificado. O operador 'in' retorna 'false' caso a propriedade não esteja no objeto especificado:

const car = ["VW", "Fiat", "GMC"]

console.log(("Ford" in car))
console.log(("VW" in car))
console.log((0 in person))
console.log((0 in car))
console.log((NaN in Number))
console.log(("length" in String))


//
//Operador 'instanceOf()'.

//O Operador 'instanceOf()' retorna 'true' se o objeto especificado for uma instância do objeto especificado como no exemplo a baixo:

console.log((car instanceof Array))
console.log((person instanceof Object))
console.log((x instanceof Number))