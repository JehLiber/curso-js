/*
Operadores de comparação
> maior que
>= maior que ou igual a 
< menor que
<= menor que ou igual a
== igualdade (checa valor)
=== igualdade estrita (valor e tipo)
!= diferente(valor)
!== diferente estrito (valor e tipo)
*/


//const comp = 10 > 5; // >= true também
//console.log(comp); // true


const num1 = 10;
const num2 = '10';
const comp = num1 == num2;
console.log(comp); // number + strings // retornou como true, mesmo a string não seja number = o que é errado. boa prática = use numeros.

// o ideal para checar os valor nesse caso, seria o === igualdade estrita = retorna false(dois tipos diferente (number, string)




