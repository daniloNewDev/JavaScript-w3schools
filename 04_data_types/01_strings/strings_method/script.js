//Funções e métodos de String - cursosDoMain()
let linha = "Bom dia para todos as pessoas de bem."
    //Os métodos de 'strings' ajudam a trabalhar com as 'strings'

let nome = "Danilo"
    //O método 'length' retorna o número de índices da variável:
console.log(nome.length)

//

//O método 'slice()' extrai uma parte de uma String antes de retorná-la:
let frase2 = linha.slice(8, 18)
console.log(frase2)

let frase3 = "Hoje é dia de macarronada."
console.log(frase3.substring(7, 10))
    //'substring()'
    //Semelhante ao 'slice()', a diferença é que não aceita índices negativos.

console.log(linha.substr(22, 15))
    //'substr()'
    //Semelhante ao 'slice()', a diferença é que o segundo parâmetro expecifica o comprimento da parte a ser extraída.

//

//O método replace retira uma parte expecífica da String e a substitui por outro valor:
let frase = "Esta é a frase que vamos manipular."
let fraseReplaced = frase.replace("vamos", "iremos")
console.log(fraseReplaced)

//

let bracha = "Baruch HShem"
    //O método 'toLowerCase()' retorna os caracteres da String em caixa baixa:
console.log(bracha.toLowerCase())
    //O método 'toUpperCase()' retorna os caracteres da String em caixa alta:
console.log(bracha.toUpperCase())

//

//O método 'concat()' junta duas ou mais Strings(Váriáveis da linha 1 e 25):
let tags = "HTML, PHP, JavaScript, CSS"
console.log(nome.concat(` vai estudar novamente ${tags}.`))

//

let email = "    cursosDoMain     "
    //O método 'trim()' retorna a String com os espaços em branco já removidos, por exemplo um campo de e-mail, ou usuário;
console.log(email.length)
console.log(email.trim())

//

//'padStart()' e 'padEnd()'
//O ECMAScript adicionou 2 métodos String para dar suporte ao preenchimento no início e no final de uma 'string'.
let text = "19"
console.log(text.padStart(5, "vw"))
console.log(text.padEnd(4, "vh"))

//

//O método 'split()' divide uma String em uma lista ordenada de substrings, coloca essas substrings em um Array e retorna um Array;
console.log(frase.split())


//Aqui o 'split()' retorna Strings separadas dentro de um Array
console.log(tags.split(", "))
    //Aqui foi possível atribuir um Array à uma variável:
let farray = frase.split()
console.log(farray)

//

//O método 'indexOf()' retorna a posição do primeiro índice dentro da String(Variável na linha 21):
console.log(frase.indexOf("que"))
    //Já o método 'lastIndexOf()' retorna a última posição da primeira letra do valor específico dentro da String:
console.log(frase.lastIndexOf("vamos"))