//    Classes   //

//  Em 2015 o ES¨introduziu as Classes no JavaScript. Classes em JavaScript são modelos para objetos JavaScript.

//É necessário adicionar a palavra-chave "class" para criar uma Classe:

// criada a classe "Car"(primeira letra maiúscula):
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
//  A classe tem duas propriedades iniciais: "name" e "year".
//  Uma classe não é um objeto. É um Template para objetos.

//    Criando Objetos     //

const carro1 = new Car("Audi", 2022);
const carro2 = new Car("VW", 2022);

console.log(carro1, carro2);

//    "constructor"   //

/*      O método "constructor é um método especial:"
      
      Tem que ter o nome exato 'constructor';
      Ele é executado automáticamente quando um novo objeto é criado;
      É usado para inicializar as propriedades do objeto.

    Caso o método 'constructor' não seja definido, o JavaScript adicionará um método construtor vazio.
*/

//    Método de Classes   //

//  Também são criados com a mesma sintaxe dos métodos de objeto.

//  Precedência:
class Moto {
  //  cria-se a palavra-chave 'class';
  constructor(name, year) {
    //   cria-se a palavra-chave 'constructor';
    this.name = name;
    this.year = year;
  }
  age() {
    // adiciona-se o método ou os métodos do objeto em questão.
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}
let cg = new Moto("honda", 2009);
console.log(`Minha moto tem ${cg.age()} anos.`);
