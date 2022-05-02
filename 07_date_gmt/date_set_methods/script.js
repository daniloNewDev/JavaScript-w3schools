////////       Set Date Methods         ////////

//Os métodos Set Date permitem definir valores de data (anos, meses, dias, horas, minutos, segundos, milissegundos) em um objeto de Data:

const dFull = new Date()
dFull.setFullYear(1985)

//'setFullYear()' defien o ano de um objeto de Data:
console.log(dFull)

const dMonth = new Date()
dMonth.setMonth(07)
//'setMonth()' define o dia de um objeto de Datacom um número de 0 - 11:
console.log(dMonth)

const dDate = new Date()
dDate.setDate(13)
//'setDate()' define o dia de um objeto de Data com um número de 1 - 31:
console.log(dDate)

//'setHours()' / 'setMinutes()' / 'setSeconds()'