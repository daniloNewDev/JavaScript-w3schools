//      Expressões Regulares      //

//    É uma sequência de caracteres que forma um "Padrão de Pesquisa".

//    Uma expressão regular é uma sequência de caracteres que forma um 'padrão de pesquisa'. Ao pesquisar dados em um texto, você pode usar esse padrão de pesquisa para descrever o que está procurando.

//    Uma expressão regular pode ser um único caractere ou um padrão mais complicado. As espressões regulares podem ser usadas para executar todos os tipos de pesquisa de texto e operações de substituição de texto.
/*
      Sintaxe:
        '/padrão/modificador'

      exemplo : '/w3schools/i'
*/
//  Neste caso 'w3schools' é o padrão (para ser usado em uma pesquisa);

//  E o 'i' é um modificador (modifica a pesquisa para não diferenciar maiúsculas de minúsculas).

//  Vamos comparar o uso do método 'search()' com uma String;
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

//    Padrões de RegExp   //

/*

    Modificadores de RegExp:

      "i":
        executa o 'case-sensitive' na busca;
      "g":
        Executa uma busca global;
      "m":
        Executa busca multi-linha.

    Expressões:

    Colchetes(para encontrar intervalo de caracteres):

      "[abc]" ou "[123]":
        Encontra qualquer caractere entre os colchetes;
      "(x|y)":
        Encontra qualquer uma das alternativas com '|'.

    Metacaracteres(com significado especial):

      "\d":
        Encontra um dígito;
      "\s":
        Encontra um caractere "espaço em branco";
      "\b":
        Encontra um Match que inicie com \bARQUIVO01, ou que termine com ARQUIV01\b;
      "\uxxxx":
        Encontra o Unicode especificado por um número hexadecimal.

    Quantificadores(definem quantidade):

      "n+":
        Corresponde a qualquer sequência que contenha pelo menos um 'n';
      "n*":
        Corresponde a qualquer sequência que contenha 0 ou mais ocorrências de 'n';
      "n?":
        Corresponde a qualquer sequência que contenha 0 ou 1 ocorrência de 'n'.
*/
