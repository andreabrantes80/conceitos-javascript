let produtos = [];

let total = 0;

const produtoInput = document.getElementById('produto');
const valorInput = document.getElementById('valor');
const tabela = document.getElementById('tabelaProdutos');
const tbody = tabela?.querySelector('tbody');
const totalElement = document.getElementById('total');

document.getElementById('adicionar')?.addEventListener('click', ()=>{
    const nomeProduto = produtoInput?.value;

    const valorProduto = parseFloat(valorInput?.value);

    if(nomeProduto && !isNaN(valorProduto) && valorProduto > 0){
        produtos.push({nome: nomeProduto, valor: valorProduto});

        total += valorProduto;

        produtoInput.value = ''
        valorInput.value = '';
    }else{
        alert('Por favor, insira um nome de produto válido e um valor numérico positivo');
    }
});

//Função para exibir a tabela com os produtos

document.getElementById('visualizarTabela').addEventListener('click', ()=>{
    tbody.innerHTML = '';

    produtos.forEach((produto)=>{
        let linha = document.createElement("tr");  //cria uma lista
        let nomeCell = document.createElement("td"); //cria uma célula
        let valorCell = document.createElement("td");

        nomeCell.textContent = produto.nome;
        valorCell.textContent = "R$ "+ produto.valor.toFixed(2);

        linha.appendChild(nomeCell);
        linha.appendChild(valorCell);

        tbody.appendChild(linha);
    });

    totalElement.textContent = "R$ "+ total.toFixed(2);

    tabela.classList.remove("oculto");
})