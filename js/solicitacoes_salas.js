//Dar funcionalidade aos botões
const aceitar = document.querySelectorAll('.buttonAceitar');
const recusar = window.document.querySelectorAll('.buttonRecusar');
const div = window.document.querySelectorAll('#container_pedidos');

// Aceitar um pedido
aceitar.forEach((botao, index) => { //botao é onde o button está e o index é a posição (qual das div)
    botao.addEventListener('click', () => { 
        buttonAceitar(index) //Está levando o index para a function buttonAceitar
    });
})

function buttonAceitar (index) {
    window.alert('Esse pedido foi aceito!'); //Mostra que o pedido foi aceito
    div[index].remove() //Está pegando o evento do forEach e removendo a div após ser aceito
};


//Remover um pedido
recusar.forEach((botao, index) => { //botao é onde o button está e o index é a posição (qual das div)
    botao.addEventListener('click', () =>{
        div[index].remove(); //Remove a div quando clica no botão recusar
    });
});