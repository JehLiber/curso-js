/*
    function saudacao(nome) {  //dessa meaneira, não precisa do ; no final das {} // dendro das () vão ser os parâmetros.
    //  console.log(`Bom dia! ${nome}!`); 
    return `Bom dia! ${nome}!`; // ela vai retornar o valor que você colocar para retornar 
    } 
*/

//obs: existem fuÇões que não vão retornar valores

//const variavel = saudacao('Luiz'); // salvando a função dentro de uma variável
// console.log(variavel); //vai retornar undefined

//console.log(variavel); //agora como comolamos o return, agora ela vai retornar o valor ao lado do return

function soma(x = 1, y = 1){ // caso você não colocar os valores na soma a baixo, eles vão assumir o valor dentro dos (), tanto os dois, como um ou outro (X,y) 
    const resultado = x + y; // dois valores
    return resultado; // dentro da função se a ultima palavra for return, nada mais vai ser executado, a menos que se for uma condicional para retornar algum valor
}
/*

console.log(soma(2, 2)); // = 4
console.log(soma(3, 2)); // = 5
console.log(soma(5, 10)); // = 15
console.log(soma())
console.log(soma('Luiz','Otávio')); // = Luiz Otávio
*/

/* const raiz = function(n) { // aqui nesse caos precisa do ponto e virgula ; 
} */
const raiz = n => n ** 0.5; // forma mais morderna = arrow function
    /*
     forma completa ta function, que resume acima a simplificação

     const raiz = function(n) {
        return n ** 0.5; 

     }

    */

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));