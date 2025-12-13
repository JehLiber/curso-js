// Introdução Arrays
//                 0        1       2
const alunos = ['luiz', 'Maria', 'João']; //JS não restrinte o tipo de dado, porém não é boa prática de programação, sempre mantém um tipo de dado.
// alunos[0] = 'Eduardo';  //voce pode modificar o tipo de dado 

//  alunos[3] ='Luiza'; // adiciona no final do elemento do array do exemplo, porém com uma muito grande, talvez fique mais complicado.

// console.log(alunos[0]); //arrays funciona da mesma forma quando focê queira procurar a letra de uma string, como pro dado dentro, por exemplo ele irá retornar = Luiz // agora como na aula mudou, o dado passou a ser = Eduardo

// console.log(alunos[1]); // = Maria
// alunos[alunos.length] = 'Luiza'; // foi adiconado mais dentro das arrays 
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';

alunos.push('Luiza'); //adiciona depois dos outros dados da array
alunos.push('Otávio'); //adiciona depois dos outros dados da array

// alunos.unshift('Luiza'); // vai ser o primeiro índice
// alunos.unshift('Fábio'); // Fábio vai ser primeiro que 'Luiza'

// os dados abaixo(pop, shift) altera o índice, por exemplo, se eu remover a 'Maria', que é o indice 1, o 'João', passa a ser o índice 1

// alunos.pop(); // removendo o final da array 
//const removido = alunos.pop()
//console.log(removido) //vai aparecer o indice que foi removido

//const removido = alunos.shift(); // remove do começo 
//console.log(removido); //vai aparecer o indice que foi removido
// delete alunos[1]; // vai remover o indice 1, porém o indice fica vazio = <1empty item>

console.log(alunos.slice(0,2)); //"fatiar" os dados, mostra até em um determinado dados = 'luiz', 'Maria'

console.log(alunos instanceof Array); //perguntando se é uma instancia de Array =( True or False, dependendo do caso) 

console.log(alunos);


console.log(alunos.length) // verificar a quantidade de dados, dentro da array