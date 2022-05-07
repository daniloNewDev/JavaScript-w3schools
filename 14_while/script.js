//      'while'     //

//Os Loops podem executar um bloco de códigos desde que uma condição especificada seja verdadeira:
/*
      while(condição) {
        //bloco de código a ser executado
      }
*/

//No exemplo abaixo, o código no Loop será executado repetidamente, desde que uma variável (i) seja menor que 10:

let text = "";
let i = 0;
while (i < 10) {
  text += "<br> O número é " + i;
  i++;
}
document.getElementById("dem").innerHTML = text;
//Caso se esqueça de aumentar a variável (i++) usando a condição (i < 10), o Loop nunca terminará, travando o navegador.

//

//      'do while'      //

//O Loop 'do while' é uma variante do Loop 'while'. Este Loop executará o bloco de códigos uma vez, antes de verificar se a condição é verdadeira, então repetirá o Loop enquanto a condição for verdadeira:
/*
          do{
            //bloco de código
          }
          while(condição);
 */
let text2 = "";
let ind = 0;

do {
  text2 += "<br>O número é " + ind;
  ind++;
} while (ind < 10);
document.getElementById("dem2").innerHTML = text2;
//  No exemplo acima o código sempre será executado pelo menos uma vez na condição false, já que o bloco de código sempre será executado antes que a condição seja testada.
