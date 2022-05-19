//    Fetch API     //

//  A Fetch API permite que o navegador faça solicitações HTTP para servidores da Web. Antes feito com XMLHttpRequest.

let file = "ind.txt";
fetch(file)
  .then((x) => x.text())
  .then((y) => (document.getElementById("dem").innerHTML = y));

//  O Fetch é baseado no 'async' e 'await', o exemplo acima pode ser mais fácil de entender assim:

getText("ind.txt");
async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  document.getElementById("dem2").innerHTML = y;
}

//  Ou para facilitar, usando nomes compreensíveis no lugar de 'x' e 'y':

getTexto("ind.txt"); //Nome de função diferente do exemplo acima.

async function getTexto(file) {
  let meuObjeto = await fetch(file);
  let myText = await meuObjeto.text();
  document.getElementById("dem3").innerHTML = myText;
}

//    Usando uma API de Geolocalização    //

//  O método 'getCurrentPosition()' é usado para retornar a posição do usuário. O exemplo abaixo retorna a latitude e longitude da posição do usuário:

const xL = document.getElementById("dem4");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    xL.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  xL.innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}.`;
}

//

//      Lidando com Erros e Rejeições     //

//  O segundo parâmetro do método 'getCurrentPosition()' é usado para tratar erros. Ele especifica uma função a ser executada se não conseguir obter a localização do usuário:

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      xL.innerHTML = "Usuário negou a solicitação de localização.";
      break;
    case error.POSITION_UNAVALIABLE:
      xL.innerHTML = "Informação de localização não encontrada.";
      break;
    case error.TIMEOUT:
      xL.innerHTML = "A solicitação para obter a localização expirou.";
      break;
    case error.UNKNOW_ERROR:
      xL.innerHTML = "Ocorreu um erro desconhecido.";
      break;
  }
}

//      Exibir um resultado no mapa     //

//  Para exibir um resultado em um mapa, é necessário acessar um serviço de mapas, como o Google Maps. No exemplo abaixo, a latitude e longitude retornadas são usadas para mostrar a localização em um Google Map (usando a mesma imagem estática):

function showPosition(position) {
  let latilonge = position.coords.latitude + "," + position.coords.longitude;

  let img_url = "https://www.google.com.br/maps/@" + latilonge + ",15z";

  document.getElementById("mapholder").innerHTML =
    "<img src='" + img_url + "'>";
  console.log(latilonge);
}
//https://www.google.com.br/maps/@-23.4591009,-46.6818803,15z
