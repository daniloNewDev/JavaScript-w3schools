const num1 = [45, 61, 13, 27, 9, 352]
const num2 = num1.map(myFunction)

document.getElementById("exemplo").innerHTML = num2

function myFunction(value, index, array) {
     return value * 2
}