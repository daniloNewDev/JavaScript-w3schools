const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let ddd = numbers.slice(0, 3);
let prefix = numbers.slice(3, 6);
let sufix = numbers.slice(6, 10);
function fone() {
  return `(${ddd.join("")}) ${prefix.join("")}-${sufix.join("")}`;
}
console.log(fone(numbers));
