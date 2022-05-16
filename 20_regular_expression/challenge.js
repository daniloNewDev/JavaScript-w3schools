const frase = "Shalom L'Olam!";

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
console.log(disemvowel(frase));
