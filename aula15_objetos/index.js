
// função, arrays, objetos são muito importante dentro da lingugaem 


/* const pessoa1 = {   //[]=arrays, {}=objetos
    nome: 'Luiz',
    sobrenome: 'Miranda',  //Uma pessoa que tem os atribustos dentro dela
    idade: 25
};

const pessoa2 = {   //[]=arrays, {}=objetos
    nome: 'Maria',
    sobrenome: 'Oliveira',  //Uma pessoa que tem os atribustos dentro dela
    idade: 55
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

*/
/////////////////////////////////////////////////////////////////////
/* function criaPessoa (nome, sobrenome, idade) { // Três parâmetros criados 
    return {nome, sobrenome, idade};



/*    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
    */
// } 
/*
const pessoa1 = criaPessoa('Luiz', 'Otávio', 25); // Três argumentos = envia um valor para o parâmetro.
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Lara', 44);
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);
console.log(pessoa1.nome, pessoa2.nome, pessoa3.idade);
 */ 

const pessoa1 ={
    nome: 'Luiz', //atributos da pessoa
    sobrenome: ' Miranda',
    idade: 25,

    fala () { //método uma function (Não precisa da palavra function no começo)
        console.log(`A minha idade atual é ${this.idade}.`) //this =repesenta o objeto no momento(pessoa1)
    }, //para criar outro método, sempre acrescente uma vírgula(,)
    incrementaIdade() {
        this.idade++;
    }
};
pessoa1.fala(); // =25
pessoa1.incrementaIdade();
pessoa1.fala(); //acrescentou a idade = 26
pessoa1.incrementaIdade();
pessoa1.fala(); // = 27