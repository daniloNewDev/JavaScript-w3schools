console.log("Primeira linha\nSegunda linha");
console.log("O meu nome é Danilo.");
console.log('O nome dela é Maria.');
console.log(`A multiplicação de 5 por 3 é ${5*3}`);
console.log("Aqui " + "estamos " + "fazendo" + " a" + " concatenação.");

//Templates strings, Templates Literals

let nome = "Danilo"
let idade = 36

function inserir() {
    if (nome == "Danilo") {
        document.getElementById("dem").innerHTML = `O nome é ${nome} e a idade é ${idade} anos.`
    }
}