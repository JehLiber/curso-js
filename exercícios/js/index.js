 /*
 
 function meuEscopo () { // criar funções para não entrar no escopo global 

    const form = document.querySelector('.form'); //usar a class para selecionar dentro do html(poderia ser tbm o id (#) se tivesse) 
   /* form.onsubmit = function (evento) { 
        evento.preventDefault(); // Não vai atualizar a página(envio do formulário)
        console.log('foi enviado');
    };
    */
   // Para o formulário não atualizar(perder o script), pois queremos os dados registrados
 /*  let contador = 1
    function recebeEventoForm (evento) {
        evento.preventDefault();  //= evitar inadimplência

        console.log(`Form não foi evnviado ${contador}`);
        contador++;
    }

    form.addEventListener('submit', recebeEventoForm);      //= adicionar ouvinte de evento,  forma mais moderna // submit = enviar
    
   
 }
 meuEscopo();
 */

 function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({    // = push (adiciona)
            nome: nome.value, //value tudo minúsculo
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        
        resultado.innerHTML += `<p>nome: ${nome.value} sobrenome: ${sobrenome.value} Peso:${peso.value} altura: ${altura.value}</p>`;
    }
        form.addEventListener('submit', recebeEventoForm);
 }
 meuEscopo();



 //obs: o 'value' é para ver o valor do objeto, dentro da página, sem ele o valor não é mostrado.