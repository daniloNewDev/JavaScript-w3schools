//    Loop 'for'    //

//O loop pode executar o mesmo bloco de código váriaas vezes. São úteis para executar um bloco de códigos várias vezes, cada uma com um valor diferente.

//    Muitas vezes, trabalhando com Arrays:

const carros = ["Audi", "BMW", "Mercedez", "Tesla", "Jeep"];
let text = "";
for (let i = 0; i < carros.length; i++) {
  text += carros[i] + "<br>";
}
document.getElementById("dem").innerHTML = text;
