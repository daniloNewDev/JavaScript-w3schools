//    this    //

//  Em JavaScript, a palavra-chave "this" se refere a um objeto. 'This" se refere a objetos diferentes dependendo de como é usada.

//  this usado em um método de objeto, refere-se a um objeto.
const res = document.getElementById("dem");
const user = {
  name: "Danilo",
  lName: "Leite",
  id: 13,
  fullName: function () {
    return `Usuário ${this.name} ${this.lName}. `;
  }, //this.name + this.lName;
};
res.innerHTML = user.fullName();
console.log(user.fullName());

//

//  'this' sozinho refere-se ao Objeto Global. Em um navegador, o objeto global é [object window]:

let varGlobal = this;
console.log(varGlobal);

//

//    Em uma função padrão    //

//  Em uma função global, o objeto global é a ligação padrão para 'this'. Em uma janela do navegador, o objeto global é [object Window]:
function funcThis() {
  return this;
}

console.log(funcThis());

//    "this" em Event Handlers    //

//  Em HTML event handlers, 'this' refere-se ao elemento HTML que recebeu o evento:

let btnNone = this;

//

//    Object Method Binding   //

//Neste caso o "this" é o objeto 'user2':
const user2 = {
  firstName: "Danilo",
  lastName: "Leite",
  id: 80,
  mFunc: function () {
    return this;
  },
};
console.log(user2.mFunc());

const user3 = {
  firstName: "John",
  lastName: "Doe",
  id: 89,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
//  this.firstName é a propriedade firstName deste objeto user3.
console.log(user3.fullName());

//    Explicit Function Binding   //

//  Os métodos "call()" e "apply()" são métodos predefinidos do JavaScript. Ambos podem ser usados para chamar um método de objeto com outro objeto como argumento.

const propriedades = {
  descricao: function () {
    return `${this.color}, ${this.width}, ${this.height} `;
  },
};
const tela = {
  color: "green",
  width: "60vw",
  height: "80vh",
};
console.log(propriedades.descricao.call(tela));

//  Borrowing Function (Empréstimo de Função) //

//  Com o método "bind()", um objeto pode emprestar um método de outro objeto. Este exemplo cria 2 objetos:
const user4 = {
  firstName: "Moshe",
  lastName: "ben Adam",
  id: 80,
};
//Com "bind()", o objeto "user3" empresta para a variável "fName" a função "fullName" para aplicar no objeto "user4":
let fName = user3.fullName.bind(user4);
console.log(fName());
