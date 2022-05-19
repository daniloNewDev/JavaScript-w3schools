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
  nome: "Danilo",
  sNome: "Leite",
  id: 80,
  mFunc: function () {
    return this;
  },
};
console.log(user2.mFunc());
