////////       'Math.random()'          ////////

//Retorna um número aleatório entre 0(inclusive) e 1(exclusive):
console.log(Math.random());
//Random sempre retorna um númeor entre 0 e 1;
//Neste caso falamos sobre números sem decimais e Random.

////////       Random Intergers         ////////

//'Math.random()' usado com 'Math.floor()' pode ser usado para retornar números inteiros:
console.log(Math.floor(Math.random() * 10));
//    Neste caso retorna um inteiro de 0 a 9;

console.log(Math.floor(Math.random() * 10 + 1));
//    Neste caso retorna um inteiro de 1 a 10.

//

////////  Proper Random Function   ////////

function getRndInterger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRndInterger(1, 17));

//

////////    Booleans    ////////

//  Boolean em JavaScript representa Um de Dois valores:
//    'true' ou 'false'.

//  Em algumas ocasiões, na programação haverrá a necessidade de escolher um certo tipo de dado que só poderá ter um valor entre dois, como no exemplo abaixo:
/*
    Sim   //    Não
    Ligado    //    Desligado
    Verdadeiro    // Falso
*/

//Toda variável sem valor é considerada 'false' como valor de Boolean.
