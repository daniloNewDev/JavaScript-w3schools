////////       Date output         ////////

//Por padrão, o JavaScript usará o fuso horário do navegador e exibirá uma data comouma String de texto completo:
const d = new Date()
console.log(d)

////////       Criando Date Objects          ////////

//Objetos de Data são criados com o 'constructor' "new Date()" como no exemplo acima, entretanto existem outras maneiras de de criar um objeto de Data:

//com parâmetros "Date(ano, mês, dia, horas, minutos, segundos, milissegundos)"
const data = new Date(1985, 08, 13, 10, 33, 30, 0)
console.log(data)
//Mês Janeiro index = 0 // mês dezembro index = 11
const anoMesDia = new Date(1985, 08, 13)
console.log(anoMesDia)
//Nesse exemplo acima foram atribuídos os 3 primeiros parâmetros.

//

////////       new Date(dateString)          ////////

//'new Date(dateString)' dria um novo objeto de Data a partir de uma data em String:
const dString = new Date("august 13, 1985 10:33:30")
console.log(dString)

//

////////        'toDateString()'        ////////

//O método 'toDateString()' converte uma data mais legível:
const toDStr = new Date()
console.log(toDStr.toDateString())

//

////////       'toISOString()'          ////////

//O método 'toISOString()' converte um objeto data em uma String , usando o formato padrão ISO:
const dateISO = new Date()
console.log(dateISO.toISOString())

