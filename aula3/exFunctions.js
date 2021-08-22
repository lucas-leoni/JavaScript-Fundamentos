// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(argumento1, argumento2) {
    return argumento1 + argumento2;
};

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando 5 ao resultado retornado da função.

let variavel = soma(3,-4) + 5;

// Qual o valor atualizado dessa variável?

4

// Declare uma nova variável, sem valor.

let novaVariavel;

// Crie uma função que adicione um valor à variável criada acima, e retorne a string: O valor da variável agora é VALOR. Onde VALOR é o novo valor da variável.

function addValor() {
    novaVariavel = 4
    return `O valor da variável agora é ${novaVariavel}.`
};

// Invoque a função criada acima.

addValor();

// Qual o retorno da função? (Use comentários de bloco).

/* 'O valor da variável agora é 4.' */

/* Crie uma função com as seguintes características:

--> A função deve receber 3 argumentos;
--> Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string: Preencha todos os valores corretamente!
--> O retorno da função deve ser a multiplicação dos 3 argumentos, somando 2 ao resultado da multiplicação. */

function funcao(argumento1, argumento2, argumento3) {
    if(!argumento1 || !argumento2 || !argumento3) {
        return 'Preencha todos os valores corretamente!';
    } else {
        return (argumento1 * argumento2 * argumento3) + 2;
    }
};

// Invoque a função criada acima, passando só dois números como argumento.

funcao(2,4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

funcao(2,4,6);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// 50

// Declarar uma variável chamada myvar, sem valor.

let myvar;

// Após declarada, atribua o valor 10 à variável myvar.

myvar = 10;

// Declare uma nova variável chamada soma, e adicione uma instrução somando os valores 15 e 8.

let soma = 15 + 8;

// Atribua à variável soma todo o valor dela, somando 1, usando o operador de soma abreviado.

soma += 1;

// Atribua à variável soma todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

soma *= 3;

// Qual é o valor da variável soma até aqui?

72

// Declare uma variável chamada souninja, atribuindo à ela o valor booleano que representa verdadeiro.

let souninja = true;

// Digite o código que verifica se a variável soma' é igual a variável myvar` (testando também o tipo).

soma === myvar;

// Digite o código que verifica se a variável myvar é menor ou igual à variável soma.

myvar <= soma;

// Crie uma função chamada divisao que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.

function divisao(numero1, numero2) {
    return numero1 / numero2;
};

// Invoque a função criada acima, passando os parâmetros 10 e 2.

divisao(10, 2);

/* Crie uma função com as seguintes características:

--> A função deve receber 3 argumentos.
--> Se somente um argumento for passado, retorne o valor do argumento.
--> Se dois argumentos forem passados, retorne a soma dos dois argumentos.
--> Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
--> Se nenhum argumento for passado, retorne o valor booleano false.
--> E ainda, se nenhuma das condições acima forem atendidas, retorne null. */

function funcao2(argumento1, argumento2, argumento3) {
    if (argumento1 !== undefined && !argumento2 && !argumento3 ) {
        return argumento1;
    } else if (argumento1 !== undefined && argumento2 !== undefined && !argumento3) {
        return argumento1 + argumento2;
    } else if (argumento1 !== undefined && argumento2 !== undefined && argumento3 !== undefined) {
        return (argumento1 + argumento2) / argumento3;
    } else if (!argumento1 && !argumento2 && !argumento3) {
        return false;
    } else {
        return null;
    }
};

/* Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada
invocação.*/

funcao2(); //false
funcao2(2); //2
funcao2(2,4); //6
funcao2(2,4,6); //1

/* Crie uma função que valide se o número informado é par ou ímpar, além disso precisa validar se o número informado é do tipo number, para satisfazer as condições:

Validar se foi inserido um dado
Validar se foi inserido um número
Validar se o número é ímpar ou par
Exiba as mensagens para cada caso informado acima. */

function isPar(numero) {
    if(numero === undefined) {
      return `É necessário informar um valor!`
    } else if(typeof numero !== 'number') {
      return `É necessário informar um número!`
    } else if (numero % 2 === 0) {
      return `O numero ${numero} é par.`;
    } else {
      return `O numero ${numero} é ímpar.`;
    }
};
  
isPar();