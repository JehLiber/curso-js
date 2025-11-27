// IEEE 754-2008

let num1 = 0.7; //number 
let num2 = 0.1; //number

num1 += num2;  // 0.8
num1 += num2;  // 0.9
num1 += num2;  // 1.0
num1 += num2;  // 1.1
num1 += num2;  // 1.2
num1 += num2;  // 1.3
num1 += num2;  // 1.4
num1 += num2;  // 1.5
num1 += num2;  // 1.6
num1 += num2;  // 1.7
num1 += num2;  // 1.8
num1 += num2;  // 1.9
num1 += num2;  // 2.0

// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8      outra forma de fazer porém mais complexa, essa resulta em número inteiro, por que transformou de decimal para inteiro.

num1 = parseFloat(num1.toFixed(2)); //forma correta para ajustar o valor de forma precisa

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString() + 2) //convertendo somente nessa linha o num1 para um string
// num1 = num1.toString(); //agora virou uma string

// console.log(num1.toString(2)); //representação binária 

// console.log(num1.toFixed(2)) //arredondar casas decimais (coloque o numero de casas que você queira mostrar)

// console.log(Number.isInteger(num1)); //isInteger= éInteiro,  verificar se o numero inteiro ou não   


// let temp = num1 * 'ola';
// console.log(Number.isNaN(temp)); //está perguntando se é um Not a Number. = true, caso for um '5' por exemplo, vai retornar como false.(Porém não é uma boa prática de programação fazer isso)

