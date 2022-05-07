//    A instrução 'break' interrompe a execução de um código e sai de um Loop:

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 7) {
    break;
  } //O 'break' interrompe antes da execução;
  text += "O número é " + i + "<br>";
}
document.getElementById("dem").innerHTML = text;

//    A instrução 'continue' pula uma iteração no Loop:
let textC = "";
for (let ic = 0; ic < 10; ic++) {
  if (ic === 4) {
    continue;
  }
  textC += "O número é " + ic + "<br>";
}
document.getElementById("dem2").innerHTML = textC;
