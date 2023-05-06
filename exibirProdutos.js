const produtos = [
    // { nome: "Bananinha space", preco: 8.99, categoria: "Petiscos", nomeImagem: "Bananinha space.png" },
    { nome: "Serenata de amor", preco: 2.0, categoria: "Petiscos", nomeImagem: "Serenata de amor.png" },
    { nome: "Caixa chocolate garoto 16uni", preco: 14.9, categoria: "Petiscos", nomeImagem: "Caixa chocolate garoto (16u).png" },
    { nome: "Barra choc garoto 80g", preco: 9.48, categoria: "Petiscos", nomeImagem: "Barra choc garoto 80g.png" },
    { nome: "Mittos queijo 35g", preco: 3.99, categoria: "Petiscos", nomeImagem: "Mittos queijo 35g" + ".png" },
    { nome: "Paçoca rolha tubitos 1uni", preco: 1.99, categoria: "Petiscos", nomeImagem: "Paçoca rolha tubitos 1uni" + ".png" },
    { nome: "Leite liq integral piracanjuba 1L", preco: 11.99, categoria: "O básico", nomeImagem: "Leite liq integral piracanjuba 1L" + ".png" },
    { nome: "Café 3 corações 250g", preco: 14.49, categoria: "O básico", nomeImagem: "Café 3 corações 250g" + ".png" },
    // { nome: "Doce de leite aurea 250g", preco: 4.49, categoria: "O básico", nomeImagem: "Doce de leite aurea 250g" + ".png" },
    { nome: "Goiabada palmeiron 250g", preco: 4.49, categoria: "O básico", nomeImagem: "Goiabada palmeiron 250g" + ".png" },
    { nome: "Papel higiênico floral 12uni", preco: 11.99, categoria: "Untensilios pro lar", nomeImagem: "Papel higiênico floral 12uni" + ".png" },
    { nome: "Refrigerante Pet 2 Litros - Coca-Cola", preco: 11.99, categoria: "Bebidas e refrigerantes", nomeImagem: "Refrigerante Pet 2 Litros - Coca-Cola" + ".png" },
    { nome: "Refrigerante Guaraná pet 1,5 Litros - Tuchaua", preco: 7.99, categoria: "Bebidas e refrigerantes", nomeImagem: "Refrigerante Guaraná pet 1,5 Litros - Tuchaua" + ".png" },
    { nome: "Cerveja Puro Malte lata 269ml - Império", preco: 4.90, categoria: "Bebidas e refrigerantes", nomeImagem: "Cerveja Puro Malte lata 269ml - Império" + ".png" },
    { nome: "Bebida Láctea sabor Chocolate 180ml - Nescau", preco: 2.90, categoria: "Bebidas e refrigerantes", nomeImagem: "Bebida Láctea sabor Chocolate 180ml - Nescau" + ".png" },
    { nome: "Energético Sugar Free lata 250ml - Red Bull", preco: 12.89, categoria: "Bebidas e refrigerantes", nomeImagem: "Energético Sugar Free lata 250ml - Red Bull" + ".png" },
    { nome: "Biscoito Wafer sabor Chocolate pacote 78g - Bauducco", preco: 2.99, categoria: "Petiscos", nomeImagem: "Biscoito Wafer sabor Chocolate pacote 78g - Bauducco" + ".png" },
    { nome: "Ype detergente liquido limão 500ml", preco: 3.99, categoria: "Untensilios pro lar", nomeImagem: "Ype detergente liquido limão 500ml" + ".png" },
    { nome: "Ype desinfetante bak floral 500ml", preco: 4.99, categoria: "Untensilios pro lar", nomeImagem: "Ype desinfetante bak floral 500ml" + ".png" },
    { nome: "Catchup tambau 190g", preco: 3.84, categoria: "Molhos", nomeImagem: "Catchup tambau 190g" + ".png" },
    { nome: "Maionese tradicional liza 196g", preco: 3.89, categoria: "Molhos", nomeImagem: "Maionese tradicional liza 196g" + ".png" },
    { nome: "Baré guraná 2L", preco: 9.99, categoria: "Bebidas e refrigerantes", nomeImagem: "Baré guraná 2L" + ".png" },
    { nome: "Oleo de soja marca soya 900ml", preco: 13.89, categoria: "O básico", nomeImagem: "Oleo de soja marca soya 900ml" + ".png" },
    { nome: "Água mineral sem gás 350ml", preco: 1.99, categoria: "Bebidas e refrigerantes", nomeImagem: "Água mineral sem gás 350ml" + ".png" },
    { nome: "Seleta legumes quero 170g", preco: 4.49, categoria: "O básico", nomeImagem: "Seleta legumes quero 170g" + ".png" },
    { nome: "Milho verde quero 170g", preco: 5.19, categoria: "O básico", nomeImagem: "Milho verde quero 170g" + ".png" },
    // { nome: "Rap10 massa pronta 297g", preco: 10.63, categoria: "Para matar a fome", nomeImagem: "Rap10 massa pronta 297g" + ".png" },
    { nome: "Doritos 84g", preco: 9.49, categoria: "Petiscos", nomeImagem: "Doritos 84g" + ".png" },
    { nome: "Batata Ruffle original 76g", preco: 10.29, categoria: "Petiscos", nomeImagem: "Batata Ruffle original 76g" + ".png" },
    { nome: "Fandangos sabor queijo 140g", preco: 14.89, categoria: "Petiscos", nomeImagem: "Fandangos sabor queijo 140g" + ".png" },
    { nome: "Cheetos 125g", preco: 14.89, categoria: "Petiscos", nomeImagem: "Cheetos 125g" + ".png" },
    { nome: "Amendoim yoki descascado 150g", preco: 5.89, categoria: "Petiscos", nomeImagem: "Amendoim yoki descascado 150g" + ".png" },
    { nome: "Pão forma pullman 400g", preco: 13.43, categoria: "Para matar a fome", nomeImagem: "Pão forma pullman 400g" + ".png" },
    { nome: "Macarrão sem glutem Urbano", preco: 7.89, categoria: "O básico", nomeImagem: "Macarrão sem glutem Urbano" + ".png" },
    { nome: "Macarrão dona benta ovo", preco: 6.95, categoria: "O básico", nomeImagem: "Macarrão dona benta ovo" + ".png" },
    { nome: "Ração caẽs filhotes todos os tamanhos 100g", preco: 3.29, categoria: "Para os nossos pets", nomeImagem: "Ração caẽs filhotes todos os tamanhos 100g" + ".png" },
    { nome: "Ração gatos 1 ano em diante whiskas 85g", preco: 3.29, categoria: "Para os nossos pets", nomeImagem: "Ração gatos 1 ano em diante whiskas 85g" + ".png" },
    { nome: "Energético 250ml - Red Bull", preco: 14.9, categoria: "Bebidas e refrigerantes", nomeImagem: "Energético 250ml - Red Bull" + ".png" },
    { nome: "Skarloff Ice lata 269ml", preco: 7.49, categoria: "Bebidas e refrigerantes", nomeImagem: "Skarloff Ice lata 269ml" + ".png" },
    { nome: "Molho tomate quero 300g", preco: 3.67, categoria: "O básico", nomeImagem: "Molho tomate quero 300g" + ".png" },
    { nome: "Absorvente always P 10 absorventes", preco: 5.99, categoria: "Feminino", nomeImagem: "Absorvente always P 10 absorventes" + ".png" },
    { nome: "Papel higiênico floral 4uni", preco: 5.49, categoria: "Untensilios pro lar", nomeImagem: "Papel higiênico floral 4uni" + ".png" },
    { nome: "Água de coco sococo 200ml", preco: 3.49, categoria: "Bebidas e refrigerantes", nomeImagem: "Água de coco sococo 200ml" + ".png" },
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
            let preco = parseFloat(spanPreco.innerText.replace("Preço: R$ ", ""));
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
        spanPreco.innerText = `Preço: R$ ${produto.preco.toFixed(2)}`;
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

