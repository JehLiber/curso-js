/*
Operadores Lógicos
&& -> AND -> E Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/

// Expressão && (AND)
const fazSol = true;  // Sim 🌞
let estaChovendo = false;  // Nao  ⛅
 
let irParaPraia = fazSol && !estaChovendo;  // Faz sol e nao esta chovendo -> true  🌞⛅
 
console.log(irParaPraia);

 
estaChovendo = true;  // Agora está chovendo  💧
irParaPraia = fazSol && !estaChovendo;  // 🌞💧 (Faz sol e Chove)
 
console.log(irParaPraia);  // Dá para ir para a praia? -> false
 
console.log();
 
// Expressão || (OR)
let temMaca = true;  // Sim 🍎
let temPera = false;  // Não ❌
let possoComer = temMaca || temPera;  // Tem maça OU tem pera  🍎 (Tem maça)
 
console.log(possoComer);  // Retorna true, pois tem uma das frutas
 
temMaca = false;  // Agora não tem nem maça, nem pera, ou seja, nada pra comer.  ❌
possoComer = temMaca || temPera;  // Tem maça OU tem pera  ❌ (Não há maça, nem pera)
 
console.log(possoComer);  // false
console.log();
 
// Expessão ! (NOT)
let joaoEHomem = true;  // true  🤵  (Sim, João é homem)
let inverterResultado = !joaoEHomem;  // false  ❌🤵 (João NÃO é homem)
 
console.log(joaoEHomem);
console.log(inverterResultado);