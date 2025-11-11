// Não podemos criar constantes com palavras reservadas,
// Constantes precisam ter nomes significativos 
// Não pode começar o nome de uma constante com um número.
// Não podem conter espaços ou traços.
//Utilizamos camelCase.
// Case-sensitive. o modo como escreve pode virar variáveis diferentes.
// Não pode modificar o valor de uma constante
// Não utilize var, utitlize const
// String = text | Number = Número

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log(resultado)
console.log(resultadoDuplicado);
// + - * /
console.log(typeof primeiroNumero) //vai identificar que tipo de variável
console.log(typeof(primeiroNumero + segundoNumero)); 


const num1 = '123';
num1 = '222';
console.log(num1); //não pode ser redefinido, por isso o nome const = CONSTANTE
