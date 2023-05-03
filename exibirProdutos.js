const produtos = [
    { nome: "Produto A", preco: 10.0, categoria: "Categoria 1", nomeImagem: "s.jpg" },
    { nome: "Produto B", preco: 20.0, categoria: "Categoria 2", nomeImagem: "s.jpg" },
    { nome: "Produto C", preco: 30.0, categoria: "Categoria 1", nomeImagem: "s.jpg" },
];

const produtosPorCategoria = {};

produtos.forEach(produto => {
    if (!produtosPorCategoria[produto.categoria]) {
        produtosPorCategoria[produto.categoria] = [];
    }
    produtosPorCategoria[produto.categoria].push({ ...produto, subtotal: 0 });
});


const listaProdutos = document.getElementById("lista-produtos");
listaProdutos.innerHTML = "";

let total = 0;
const totalElement = document.getElementById("total");

function calcularTotal() {
    total = 0;
    for (let categoria in produtosPorCategoria) {
        produtosPorCategoria[categoria].forEach(produto => {
            const inputQuantidade = document.getElementById(`${produto.nome}-quantidade`);
            const spanPreco = document.getElementById(`${produto.nome}-preco`);
            const spanSubtotal = document.getElementById(`${produto.nome}-subtotal`);
            spanSubtotal.innerText = "Subtotal: R$ 0.00"

            let quantidade = parseInt(inputQuantidade.value);
            let preco = parseFloat(spanPreco.innerText.replace("R$ ", ""));
            let subtotal = quantidade * preco;

            total += subtotal;
            produto.subtotal = subtotal;

            spanSubtotal.innerText = `Subtotal: R$ ${subtotal.toFixed(2)}`;
        });
    }
    return total;
}

for (let categoria in produtosPorCategoria) {
    const listaCategoria = document.createElement("ul");
    listaCategoria.innerHTML = `<h3>${categoria}</h3>`;
    listaProdutos.appendChild(listaCategoria);

    produtosPorCategoria[categoria].forEach(produto => {
        const item = document.createElement("li");

        // Adiciona o input de quantidade para cada produto
        const inputQuantidade = document.createElement("input");
        inputQuantidade.type = "number";
        inputQuantidade.min = "0";
        inputQuantidade.value = "0";
        inputQuantidade.id = `${produto.nome}-quantidade`;
        item.appendChild(inputQuantidade);

        const spanNome = document.createElement("span");
        spanNome.innerText = produto.nome;
        item.appendChild(spanNome);

        // Adiciona a imagem do produto
        const imgProduto = document.createElement("img");
        imgProduto.src = "imagens/" + produto.nomeImagem;
        item.appendChild(imgProduto);

        const spanPreco = document.createElement("span");
        spanPreco.innerText = `R$ ${produto.preco.toFixed(2)}`;
        spanPreco.id = `${produto.nome}-preco`;
        item.appendChild(spanPreco);

        const spanSubtotal = document.createElement("span");
        spanSubtotal.innerText = `Subtotal: R$ ${produto.subtotal.toFixed(2)}`;
        spanSubtotal.id = `${produto.nome}-subtotal`;
        item.appendChild(spanSubtotal);

        listaCategoria.appendChild(item);

        // Adiciona o evento de mudança de valor do input para atualizar o total
        inputQuantidade.addEventListener("change", () => {
            total = calcularTotal();
            totalElement.innerText = `Total: R$ ${total.toFixed(2)}`;
        });
    });
}

