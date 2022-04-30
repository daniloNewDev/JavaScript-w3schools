//Propriedades

//Uma propriedade é a parte mais importante de qualquer objeto JavaScrip. Propriedades são os valores atribuídos a um 'object'.
/*
    Sintaxe da Propriedade em um 'object:
        nomeDoObjeto = {
            nomeDaPropriedade: valorDaPropriedade,
            nomeDaPropriedade: valorDaPropriedade,
            nomeDaPropriedade: valorDaPropriedade,
        }
*/
//Um 'object' (Objeto) é uma coleção de Propriedades não ordenadas.

let carros = {
        bmw: "50mil",
        vw: "60mil",
        fiat: "55mil"
    }
    //Há 2 maneiras de acessar o valor de uma propriedade de um 'object' como no exemplo de sintaxes abaixo:

//  nomeDoObjeto.nomeDaPropriedade
console.log(carros.bmw)

//  nomeDoObjeto["nomeDaPropriedade"]
console.log(carros["fiat"])



//Propriedades em Loop:

//Um bloco de códigos dentro de um 'for...in' é executado uma vez para cada propriedade:

let refri = {
    coca: " 9 R$",
    guarana: " 8 R$",
    sprite: " 8 R$",
    fanta: " 7 R$"
}

for (let p in refri) {
    console.log(p += refri[p])
}


//Uma propriedades funciona quase igual a um método, a Propriedade funciona como um identificador válido;

//Os nomes de propriedades devem ser em formato string;

let nome = "Israel"
let ysim = ["Tel Aviv", "Golam", "Jerusalém", "Beit L'Hem"]

console.log(nome.length)
console.log(ysim.length)