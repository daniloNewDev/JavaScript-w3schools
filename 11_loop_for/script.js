//    Loop 'for'    //

//O loop pode executar o mesmo bloco de código váriaas vezes. São úteis para executar um bloco de códigos várias vezes, cada uma com um valor diferente.

//    Muitas vezes, trabalhando com Arrays:

const carros = ["Audi", "BMW", "Mercedez", "Tesla", "Jeep"];
let text = "";
for (let i = 0; i < carros.length; i++) {
  text += carros[i] + "<br>";
}
document.getElementById("dem").innerHTML = text;

//    Diferentes tipos de Loop    //

//JavaScript suporta deiferentes tipos de Loop:
/*
      
      'for/in'
        percorre as propriedades de um objeto;
      'for/of'
        percorre os valores de um objeto iterável;
      'while'
        percorre um bloco de código enquanto uma condição específica for verdadeira;
      'do/while'
        também percorre um bloco de código enquanto uma condição específica for verdadeira.

*/

/*
              'for'
        percorre um bloco várias vezes;
*/
let textFor = "";

for (let i = 0; i < 5; i++) {
  textFor += `O número é ${i}.` + "<br>";
}

document.getElementById("demFor").innerHTML = textFor;
/*
      for(statement 1; statement 2; statement 3) {
        bloco de códigoa ser executado
      }

      "°statement 1" é executado uma vez antes da execução do bloco de código;

      "°statement 2" define a condição para executar o bloco de código;

      "°statement 3" é executado (todas as vezes) após a execução do bloco de código.
*/

//      'statement 1'

let i, leng, textCar;
//Vários valores no statement 1:
for (i = 0, leng = carros.length, textCar = ""; i < leng; i++) {
  textCar += carros[i] + "<br>";
}
document.getElementById("demCarros").innerHTML = textCar;

//    Normalmente no 'statement 1' é usado para inicializar a variável usada no Loop (let i = 0;). Entretanto nem sempre isso ocorre, como no exemplo acima. Valores separados por vírgula.

let ind = 2;
let len = carros.length;
let textCar2 = "";
//Ocultando o 'statement 1':
for (; ind < len; ind++) {
  textCar2 += carros[ind] + "<br>";
}
document.getElementById("demCarros2").innerHTML = textCar2;
//    Frequentemente o 'statement 2' é usado para avaliar a condição da variável inicial. Se o 'statemente 2' retorna 'true', o Loop começará novamente, se retornar 'false', o Loop terminará.

//

//      'statement 2'

//    Obs.: Caso o 'statement 2' seja omitido, será necessário fornecer um 'break' dentro do Loop, para que o navegador não trave em um Loop infinito.

//

//      'statement 3'

//  O 'statement 3' incrementa o valor da variável inicial. É opcional, e também pode usar decrementação (incrementação negativa "i--"), incremento positivo ("i = i + 10"), ou qualquer outra coisa.
