// Ao digitar a quantidade de compra do ingresso, diminuir a quantidade disponível


function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

   if (tipo.value == 'pista'){
        comprarPista(qtd);
       
    }   else if (tipo.value == 'superior' ){
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista){
        alert ('Quantidade insidponível para tipo Pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert ('Compra realizada com sucesso!');
         // Limpar o campo de quantidade:
        document.getElementById('qtd').value = '';
    }

}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior){
        alert ('Quantidade insidponível para tipo Cadeira Superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert ('Compra realizada com sucesso!');
        // Limpar o campo de quantidade:
        document.getElementById('qtd').value = '';
    }

}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior){
        alert ('Quantidade insidponível para tipo Cadeira Inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert ('Compra realizada com sucesso!');
        // Limpar o campo de quantidade:
        document.getElementById('qtd').value = '';
    }

}

