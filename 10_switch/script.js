//    'switch'    //

//A instrução 'switch' é utilizada para executar diferentes ações com base em diferentes condições. É recomendado o uso da declaração 'switch' para selecionar muitos blocos de código a serem executados:

let dia;

switch (new Date().getDay()) {
  case 0:
    dia = "Domingo";
    break;
  case 1:
    dia = "Segunda";
    break;
  case 2:
    dia = "Terça";
    break;
  case 3:
    dia = "Quarta";
    break;
  case 4:
    dia = "Quinta";
    break;
  case 5:
    dia = "Sexta";
    break;
  case 6:
    dia = "Sábado";
}

document.getElementById("dem").innerHTML = `Hoje é ${dia}!`;

//

//    A 'key-word' 'break'   //

//  Quando o JavaScript atinge a palavra 'break', ele sai do bloco 'switch'. Isso interromperá a execução dentro do bloco. Não é necessário colocar 'break' no último bloco de comutação.

//

//    A 'key-word' 'default'    //

//  A palavra 'default' especifica o código padrão a ser executado caso não haja correspondência no 'case match':

let text;

switch (new Date().getDay()) {
  case 5:
    text = "Sexta";
    break;
  case 0:
    text = "Domingo";
    break;
  default:
    text = "Dia de folga!";
}

document.getElementById("dem2").innerHTML = text;

//    Commom Code Block   //

//   No caso de diferentes caixas de comutação que usem o mesmo código:

let message;
switch (new Date().getDay()) {
  case 4:
  case 5:
    message = "Chgando pagamento!";
    break;
  case 6:
    message = "Dia de Pagamento!";
    break;
  default:
    message = "longe do Pagamento ainda!";
}

document.getElementById("dem3").innerHTML = message;

//

//    Comparação Estrita    //

//Casos de Comutação usam comparação estrita (===). Os valores devem ser do mesmo tipo para corresponder. Uma comparação estrita só pode ser verdadeira se os operandos forem do mesmo tipo.
let onOff;
let x = 1;

switch (x) {
  case 0:
    onOff = "Off";
    break;
  case 1:
    onOff = "On";
    break;
  default:
    onOff = "No value found.";
}
document.getElementById("dem4").innerHTML = onOff;
