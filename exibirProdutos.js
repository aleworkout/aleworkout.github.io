const produtos = [
    { nome: "Bananinha space", preco: 8.99, categoria: "Petiscos", nomeImagem: "Bananinha space.png" },
    { nome: "Serenata de amor", preco: 2.0, categoria: "Petiscos", nomeImagem: "Serenata de amor.png" },
    { nome: "Caixa chocolate garoto 16uni", preco: 14.9, categoria: "Petiscos", nomeImagem: "Caixa chocolate garoto (16u).png" },
    { nome: "Barra choc garoto 80g", preco: 9.48, categoria: "Petiscos", nomeImagem: "Barra choc garoto 80g.png" },
    { nome: "Mittos queijo 35g", preco: 3.99, categoria: "Petiscos", nomeImagem: "Mittos queijo 35g" + ".png" },
    { nome: "Paçoca rolha tubitos 1uni", preco: 1.99, categoria: "Petiscos", nomeImagem: "Paçoca rolha tubitos 1uni" + ".png" },
    { nome: "Leite liq integral piracanjuba 1L", preco: 11.99, categoria: "O básico", nomeImagem: "Leite liq integral piracanjuba 1L" + ".png" },
    { nome: "Café 3 corações 250g", preco: 14.49, categoria: "O básico", nomeImagem: "Café 3 corações 250g" + ".png" },
    { nome: "Doce de leite aurea 250g", preco: 4.49, categoria: "O básico", nomeImagem: "Doce de leite aurea 250g" + ".png" },
    { nome: "Goiabada palmeiron 250g", preco: 4.49, categoria: "O básico", nomeImagem: "Goiabada palmeiron 250g" + ".png" },
    { nome: "Papel higiênico floral 12uni", preco: 11.99, categoria: "Untensilios pro lar", nomeImagem: "Papel higiênico floral 12uni" + ".png" },
    { nome: "Refrigerante Pet 2 Litros - Coca-Cola", preco: 9.99, categoria: "Bebidas e refrigerantes", nomeImagem: "Refrigerante Pet 2 Litros - Coca-Cola" + ".png" },

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
        item.classList.add("produto");

        // Adiciona o input de quantidade para cada produto
        const inputQuantidade = document.createElement("input");
        inputQuantidade.type = "number";
        inputQuantidade.min = "0";
        inputQuantidade.value = "0";
        inputQuantidade.classList.add("preco");
        inputQuantidade.id = `${produto.nome}-quantidade`;
        item.appendChild(inputQuantidade);

        const spanNome = document.createElement("span");
        spanNome.innerText = produto.nome;
        spanNome.classList.add("nome");
        item.appendChild(spanNome);

        // Adiciona a imagem do produto
        const imgProduto = document.createElement("img");
        imgProduto.src = "imagens/" + produto.nomeImagem;
        item.appendChild(imgProduto);

        const spanPreco = document.createElement("span");
        spanPreco.innerText = `R$ ${produto.preco.toFixed(2)}`;
        spanPreco.classList.add("preco");
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

