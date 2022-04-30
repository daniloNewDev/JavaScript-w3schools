//Objeto.
//Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome(ou chave) e um valor;
//É possível atribuir uma 'function' ao valor de propriedade, que é então considerada um "Método do Objeto";


let pessoa = {
    nome: "Danilo",
    idade: 36,
    profissao: "Motoboy",
    characters: "Clark, Ralf, Leona"
}

console.log(pessoa.profissao)

//Usando o delete  Propriedades:
delete pessoa.profissao
console.log(pessoa)


//Copiando Propriedades com o método '.assign()':
let carro = {
    portas: 2,
    portamalas: '200l',
    motor: '2.0'
}
let adicionais = { //Propriedades a serem copiadas.
    tetosolar: true,
    arcondicionado: true
}
Object.assign(carro, adicionais) //.assign()
console.log(carro)

//As propriedades além de tipos de dados como 'String', 'Number' ou 'Boolean' também recebem um Array como valor:
let bag = {
        cabos: "Blindados",
        encordamento: 3,
        jogoDeChave: true,
        alimento: ["Suco", "Água", "Refirgerante", "Doce", "Salgado", "Guardanapo", "Copos"]
    }
    //Para acessar o valor de dentro do Array éusada a sintaxe "nomeDoObjeto.nomeDaPropriedade[posição do índice]" como no exemplo abaixo:
console.log(bag.alimento[1])

//Para reescrever um índice uma propriedade ao Objeto

bag.cabos = "Normal"
bag.alimento[-1] = "Suco gelado"
    //console.log(bag)