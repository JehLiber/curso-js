// let umaString = " Um \"texto\""; // para as "" aparecerem \ caracatere de escape
//               01234567   
let umaString = "Um texto";

console.log(umaString.charAt(5)); /*Para saber a posição do determinado elemento*/ 
console.log(umaString.lastIndexOf('m', 4)); /*de tras para frente*/
console.log(umaString.match(/[a-z]/g)); //expressão regular
console.log(umaString.search(/x/)); //para procurar.
console.log(umaString.replace('Um', 'Outra')) //ele subustituiu a string 'Um' para 'Outra'
console.log(umaString.replace(/t/g, '#')); //subistituiu os 't' por '#'
console.log(umaString.length); //saber o tamanho da string = 8 por que começa do 0
console.log(umaString.slice(2, 5)); //mostra o inicio e o final que você deseja
console.log(umaString.split(' ', 2));
console.log(umaString.toUpperCase()); /* tudo maiusculo*/
console.log(umaString.toLowerCase()); /*Tudo minúsculo*/ 


console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`); 
