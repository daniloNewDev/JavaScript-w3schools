let maior = Math.max(3, 54, 25, 757, 23, 4235);
console.log(maior);
let menor = Math.min(245, 424, 1, 4364);
console.log(menor);
let arredondar = Math.round(258.52523634);
console.log(arredondar);

//Operadores aritiméticos JavaScript

//Os Operadores Aritméticos executam aritmética em números (literais ou variáveis).

let x = 3 + 3; //Operação com números literais
let y = 7;
let z = x + y; //Operação com variáveis
/*
        +   adição
        -   subtração
        *   multiplicação
        **  Exponenciação ou 'pow()'
        /   divisão
        %   Modulação
        ++  Incrementação
        --  Decrementação

    */

let exponen = Math.pow(y, 2); //y = 7
console.log(exponen);
console.log(7 ** 2);

//A precedência do operador descreve a ordem em que as operações são executadas em uma expressão aritmética, da mesma maneira da aritm´rtica na Matemática Tradicional, ensinada nas escolas.


//Usando um 'Math' em um array:

//Usando o método 'Math.max.apply()' é possível encontrar o valor mais alto dentro de um array:
const numeros = [23, 63, 72, 12, 18, 1, 900, 45, 8]
function myArrayMax(arr){
    return Math.max.apply(null, arr)
}
console.log(myArrayMax(numeros))

//Usando o método 'Math.min.apply()' é possível encontrar o menor valor dentro de um array:
function myArrayMin(arr){
    return Math.min.apply(null, arr)
}
console.log(myArrayMin(numeros))