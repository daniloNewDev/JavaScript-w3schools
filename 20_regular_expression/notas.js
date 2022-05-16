const notaDo = ["do","do#", "re", "re#", "mi", "fa", "fa#", "sol", "sol#", "la", "la#", "si"];

const doMaior = ["sol", "la", "si", "do", "re","mi", "fa#", "sol"]
function escalaMaior(x) {
  let i = notaDo.indexOf(x)
  return [notaDo[i], notaDo[]]
}
console.log(escalaMaior("sol"))