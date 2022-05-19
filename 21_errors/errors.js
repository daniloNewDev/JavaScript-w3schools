//    Throw, e Try...Catch...Finally    //

//Ao executar o codígo em JavaScript, diferentes erros podem ocorrer. Erros podem ser errors d codificação feitos pelo programador, erros devido a entrada errada e outras situações imprevisíveis.

//  criada a variável que recebe a resposta do "try" ou do "catch":
let res = "";
//"try" define um bloco de código para ser executado(tentativa de executá-lo):
try {
  adsrlert("Shalom");
  //"catch" define um bloco de código para lidar com qualquer erro.
} catch (err) {
  res = err.message;
}
/*
      "try" permite que você defina um bloco de código para ser testado quanto a erros enquanto está sendo executado.

      "catch" permite definir um bloco de código a ser executado, caso ocorra um erro no bloco 'try'.

      os dois statements vêm em pares.
*/
console.log(res);

//

//    JavaScript Throw Error    //

//Quando ocorre um erro, o JavaScript para e gera uma mensagem de erro. O termo técnico para isso é "throw an error". Cria um objeto Error com duas propriedades: "name" e "message".

//

//  O statement 'throw' permite que o usuário crie um Erro Personalizado. Tecnnicamente, você pode lançar uma exceção (throw an error). A exceção pode ser um JavaScript String, Number, Boolean ou um Objeto.

function func() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("dem").value;
  try {
    if (x == "") throw "empty"; //mensagem personalizada de erro
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high"; //por meio de "throw"
  } catch (err) {
    message.innerHTML = `Input is ${err}!`;
  } finally {
    document.getElementById("dem").value = "";
  }
}

//    Statement "finally"   //

//  O statement 'finally' permite executar o código, depois de "try"/"catch", independentemente do resultado:
