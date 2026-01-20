//Operadores de Atribuicao
let x = 5;
let y = 10;

x += y; //Soma x = x + y;
x -+ y; // Subtrai x = x - y;
x *= y; //Mult x = x * y;
x /= y; //Divide x = x / y;
x %= y; //Modulo x = x % y;
x **= y; //Potencia x = x ** y;

// Operador Ternario abrevia if e else
// condicao ? true : false

let idade = 17;

let podeBeber = (idade >= 18) ? "Pode beber" : "Nao pode beber";


// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll +=  500;

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? true : false;