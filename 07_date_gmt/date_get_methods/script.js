////////       get Date Methods         ////////

//Métodos de Date podem ser usados para pegar informações de um objeto Date:

const d = new Date()
console.log(d)

//'getFullYear()' retorna o ano da Date com um número de 4 dígitos:
console.log(d.getFullYear())

//'getFullMonth()' retorna o mês de uma Date com um número de index de 0 - 11:
console.log(d.getMonth())

//'getDate()' retorna o dia de uma Date com um número de 1 - 31:
console.log(d.getDate())

//'getHours()' retorna as horas de uma Date com um número de 0 - 23:
console.log(d.getHours())

//'getMinutes()' retorna os minutos de uma Date com um número de 0 - 59:
console.log(d.getMinutes())

//'getSeconds()' / 'getMilliseconds()'...
console.log(d.getSeconds())
console.log(d.getMilliseconds())

//'getDay()' retorna o dia da semana de um Date com um número index de 0 - 6:
console.log(d.getDay())