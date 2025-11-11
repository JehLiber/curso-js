/*
 Aritméticos
+ Adicção / Concatenação(Junção) 

- Subtração
 / divisão
* multiplicação
** Potenciação
% Resto da divisão 

Precedencia (ordem)
() parenteses
** potenciação
* / % (da esquerda pra direita)
+ - 


 operador de incremento ++
 atribuí o valor nela

 operador de decremento --
 atribuí o valor, porém subtraindo

 opedores de atribuição:
 **= 
 */

const num1 = 10;
const num2 = 5;
const num3 = 2;
console.log(num1 - num2)

console.log(num2 * num3 + num1);

let contador = 1;
contador++; // deu valor de (+ 1)  
contador++; // valor = 3  
contador++; // valor = 4  
contador++; // valor = 5  

console.log(contador);

const passo = 2; //pular de 2 em 2
let = contador = 0;
contador = contador + passo;
console.log(contador); //2
contador++;
console.log(contador); //4
contador *= 2;
contador = contador + passo;
console.log(contador); //6
contador += passo; //contador = contador + passo

// NaN = Not a Number 

const num5 = 10;
const num6 = 'Jessica'
console.log(num1 * num2);
 // JS ele vai tentar resolver o problema, mas não quer dizer que esteja certo, por isso é muito importante entender o modo como você escreve o valor da variável.

 // parseInt (inteiro), parseFloat(decimais) ou Number
 const num7 = parseInt('5');
 console.log(num7);
 console.log(typeof num7); // retornou como number
