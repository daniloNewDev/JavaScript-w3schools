//      Criando um Web Worker em JavaScript externo.        //

//um script que conta tempo:
let i = 0;
function timedCount() {
  i++;
  postMessage(i);
  setTimeout("timedCount()", 500);
}

timedCount();
//a parte importante do código acima é 'postMessage()', que é usado para postar uma mensagem de volta na página HTML.
