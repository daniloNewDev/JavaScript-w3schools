// Math()

// O Objeto     Math' permite que você execute tarefas matemáticas em números.

console.log(Math.PI);

// Ao contrário de outros objetos, Math não precisa de contructor para ser criado. O objeto Math é estático(sem movimento)> Portanto todos os métodos podem ser utilizados sem que haja a necessidade de criar um objeto antes:
/*

          Sintaxe:

               'Math.method(number)'
*/

/// /////       'Math.round()'      ////////
// O método Math.round() retorna o inteiro mais próximo:
console.log(Math.round(5.6));
console.log(Math.round(5.5));
// de .4 pra baixo e 'round()' arredonda para 5, nesse caso abaixo:
console.log(Math.round(5.4));

/// /////       'Math.ceil()'       ////////

// Retorna o inteiro maior mais próximo:
console.log(Math.ceil(4.2));

/// /////       'Math.floor()'       ////////

// Retorna o inteiro menor mais próximo:
console.log(Math.floor(5.9));

/// /////       'Math.trunc()'       ////////

// Retorna a parte inteira do number:
console.log(Math.trunc(4.1));

/// /////       'Math.sign()'       ////////

// Retorna -1 se o num for negativo; 0 para null; e 1 para positivo:
console.log(Math.sign(4));
console.log(Math.sign(0));
console.log(Math.sign(-3));

/// /////       'Math.pow(x, y)'       ////////

// Retorna o valor de 'x' elevdo a 'y':
console.log(5 ** 2);

/// /////       'Math.sqrt(x)'       ////////

// Retorna a raiz quadrada de x:
console.log(Math.sqrt(49));

/// /////       'Math.abs(x)'       ////////

// Retorna o valor absoluto (positivo) de x:
console.log(Math.abs(-4.7));

/// /////       'Math.sin(x)' // 'Math.cos()'      ////////

// 'Math.sin(x)' retorna o seno (valor entre -1 e 1) do ângulo x (dado em radianos):
console.log(Math.sin(90));

// 'Math.cos()' retorna o cosseno (um valor entre -1 e 1) do ângulo x (dados em radianos):
console.log(Math.cos(90));

/// /////       'Math.random()'          ////////

// Retorna um número aleatório entre 0(inclusive) e 1(exclusive):
console.log(Math.random());

//

/// /////////////////////////////////////////////////

/// /////       'Math.log()' // 'Math.E'       ////////

// Retorna o logaritmo natural de x:

console.log(Math.log(1));
console.log(Math.log(2));
console.log(Math.log(3));

/// /////       'Math.log2(x)' // 'Math.log10()'       ////////

// Retorna o logaritmo de x na base 2:
console.log(Math.log2(16));
// Retorna o logaritmo de x na base 10:
console.log(Math.log10(1000));
