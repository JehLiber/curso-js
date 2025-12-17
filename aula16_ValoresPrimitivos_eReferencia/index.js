/*
Primitivos(imutáveis - não podem mudar) - string, number, boolean, undefined, null (bigint, symbol)


Referência(mutável- podem mudar) - array, object, function - passados por referência.

*/
/////////////////////////////////////////
/*

//          0123
let nome = 'Luiz';
nome[0] = 'R'; //não muda, pois string é imutável
console.log(nome[0]) //  = L 

*/
/*
let a ='A';
let b = a; //cópia 
console.log(a, b);

a = 'Outra coisa';
console.log(a,b); // alterando o valor de a, não altera o valor de b. retorna = Outra coisa A
*/
/*
let a =[1,2,3];
let b = a;
let c = b;
console.log(a, b);

a.push(4); // aumentando um valor da array
console.log(a, b); //ambos tem o mesmo resultado, mesmo mexendo no valor do a

b.pop(); // retirando um valor da array
console.log(a, b) //a e b foram modificados

a.push('Luiz');
console.log(c);  // = [1,2,3, 'Luiz']
*/
////////////////////////////////////

/*
let a =[1,2,3];
let b = [...a]; // se caso copiar o valor de a [...a] 
let c = b;
console.log(a, b); // = [1,2,3][1,2,3]

a.push(4); // aumentando um valor da array
console.log(a, b); // [1,2,3,4][1,2,3]

b.pop(); // retirando um valor da array
console.log(a, b) // [1,2,3,4][1,2]

a.push('Luiz');
console.log(c);  // [1,2]
*/
//////////////////////////////////////////
const a = { //objetos  são chaves {}
    nome: 'Luiz',
    sobrenome:'Otávio'
};

const b = {...a}; //copiar mesmo sem apontar pro mesmo local da memória é igual da array

a.nome = 'João';
console.log(a); //'João' 'Otávio'
console.log(b); // 'Luiz' 'Otávio'
