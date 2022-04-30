let arr = [3, 6, 12, 22, 45, 18]
let nomes = ['Danilo', 'Shalom', 'Boker Tov']
let bool = [true, false, NaN]

console.log(arr[2])
console.log(nomes[2])
console.log(true)
console.log(arr[arr.length - 1])
console.log(arr.sort())

//O Objeto 'Array' é usado para armazenar dois ou mais valores em uma única variável;

//Os índices do 'Array' iniciam na posição 0. O primeiro index no Array está na posição 0, o segundo na posição 1 e assim por diante;

let num = [9, 3, 12, 36]
console.log(typeof(num))

//Mas por que usar um 'Array'?

let marca1 = "Asus"
let marca2 = "Lenovo"
let marca3 = "Apple"

//Atribuir valores à variáveis como no exemplo de cima é bem simples, pois temos apenas 3 nomes de marcas atribuídos às variáveis, entretanto caso haja 50 nomes de marcas será muito mais fácil criar um 'Array':

let marcas = ["Samsung", "Iphone", "Motorola", "Asus"]

//É possível acessar o valor de um Array referindo-se ao número do desse valor expecífico:

console.log(marcas[2])
marcas.push("Usado")
console.log(marcas)