//'JSON'

//JSON significa JavaScript Object Notation;
//      É um formato para armazenar e transportar dados.


//Apesar de ser muito parecido com um 'object' JS, o arquivo JSON tem alguns traços usados na linguagem 'C';

//O 'JSON' é um texto e pode ser transportado para qualquer lugar e ser interpretado por qualquer linguagem de programação:

let meuObjeto = {
        "nome": "Moshe",
        "idade": 3500,
        "natural": "Mitzraim",
        "profissal": "Tsadik",
        "missao": "liberdade"
    }
    //O método 'stringify()' converte um 'object' JavaScript em um 'JSON':
console.log(JSON.stringify(meuObjeto))


//O método 'parse()' analisa 'JSON' e retorna um 'object' JavaScript;
let meuJson = '{"nome":"ytzhak","idade": 4800,"natural":"Israel","profissao": "patirarca"}'

console.log(JSON.parse(meuJson))