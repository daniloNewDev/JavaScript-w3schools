//      Expressões Regulares      //

//    Uma expressão regular é uma sequência de caracteres que forma um 'padrão de pesquisa'. Ao pesquisar dados em um texto, você pode usar esse padrão de pesquisa para descrever o que está procurando.

//    Uma espressão regular pode ser um único caractere ou um padrão mais complicado. As espressões regulares podem ser usadas para executar todos os tipos de pesquisa de texto e operações de substituição de texto.
/*
      Sintaxe:
        '/padrão/modificador'

      exemplo : '/w3schools/i'
*/
//  Neste caso 'w3schools' é o padrão (para ser usado em uma pesquisa);

//  E o 'i' é um modificador (modifica a pesquisa para não diferenciar maiúsculas de minúsculas).

//  Vamos comparar o suo do método 'search()' com uma String;
let text = "Visit W3schools.";
let n = text.search("W3schools");
console.log(n);

//  Usando o 'search()' com RegExp:
let textRE = "Visit W3schools.";
let tRE = textRE.search(/w3schools/i);
console.log(tRE);

//  Usando um 'replace()' com uma String:
let result = text.replace("W3schools", "Microsoft");
console.log(result);

//  Usando uma RegExp que não diferencia maiúsculas e minúsculas:
let resultRE = text.replace(/w3schools/i, "Microsoft");
console.log(resultRE);

//

//    Modificadores de RegExp     //
//  "i" : executa o 'case-sensitive' na busca;
//  "g" : Executa uma busca global;
//  "m" : Executa busca multi-linha.
