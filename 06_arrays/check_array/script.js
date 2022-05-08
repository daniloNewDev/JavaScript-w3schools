const chords = ["do", "re", "sol", "la"];
const seqChords = chords.concat("si");
seqChords.splice(2, 0, "mi", "fa");
console.log(seqChords);

console.log(seqChords.constructor);
console.log(chords.constructor);
