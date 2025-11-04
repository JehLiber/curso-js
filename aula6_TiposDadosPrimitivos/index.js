//String, number, undefined, null, boolean, symbol(mais avançado)

const nome = 'Jessica'; // String
const nome1 = "Jessica"; // String
const nome2 = `Jessica`; // String
const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno = 10.52; // undefined = Não aponta pra local nenhuma na memória
const sobrenomeALuno = null; // Nulo = Não aponta pra local nenhuma na memória
const aprovado = true; // Boolean = true or false(valor lógico) 

console.log(typeof nome1, num1); //saber o tipo de variável

let a = 2; 
const b = a; //copiou o dado da variável a = 2, 2

a = 3;
console.log(a, b); // retornou, let redeclarou para 3) = 3 , 2 