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
    { nome: "Papel higiênico floral 12uni", preco: 11.99, categoria: "Utensilios pro lar", nomeImagem: "Papel higiênico floral 12uni" + ".png" },
    { nome: "Refrigerante Pet 2 Litros - Coca-Cola", preco: 11.99, categoria: "Bebidas e refrigerantes", nomeImagem: "Refrigerante Pet 2 Litros - Coca-Cola" + ".png" },
    { nome: "Refrigerante Guaraná pet 1,5 Litros - Tuchaua", preco: 7.99, categoria: "Bebidas e refrigerantes", nomeImagem: "Refrigerante Guaraná pet 1,5 Litros - Tuchaua" + ".png" },
    { nome: "Cerveja Puro Malte lata 269ml - Império", preco: 4.90, categoria: "Bebidas e refrigerantes", nomeImagem: "Cerveja Puro Malte lata 269ml - Império" + ".png" },
    { nome: "Bebida Láctea sabor Chocolate 180ml - Nescau", preco: 2.90, categoria: "Bebidas e refrigerantes", nomeImagem: "Bebida Láctea sabor Chocolate 180ml - Nescau" + ".png" },
    { nome: "Energético Sugar Free lata 250ml - Red Bull", preco: 12.89, categoria: "Bebidas e refrigerantes", nomeImagem: "Energético Sugar Free lata 250ml - Red Bull" + ".png" },
    { nome: "Biscoito Wafer sabor Chocolate pacote 78g - Bauducco", preco: 2.99, categoria: "Petiscos", nomeImagem: "Biscoito Wafer sabor Chocolate pacote 78g - Bauducco" + ".png" },
    { nome: "Ype detergente liquido limão 500ml", preco: 3.99, categoria: "Utensilios pro lar", nomeImagem: "Ype detergente liquido limão 500ml" + ".png" },
    { nome: "Ype desinfetante bak floral 500ml", preco: 4.99, categoria: "Utensilios pro lar", nomeImagem: "Ype desinfetante bak floral 500ml" + ".png" },
    { nome: "Catchup tambau 190g", preco: 3.84, categoria: "Molhos", nomeImagem: "Catchup tambau 190g" + ".png" },
    { nome: "Maionese tradicional liza 196g", preco: 3.89, categoria: "Molhos", nomeImagem: "Maionese tradicional liza 196g" + ".png" },
    { nome: "Baré guraná 2L", preco: 9.99, categoria: "Bebidas e refrigerantes", nomeImagem: "Baré guraná 2L" + ".png" },
    { nome: "Oleo de soja marca soya 900ml", preco: 13.89, categoria: "O básico", nomeImagem: "Oleo de soja marca soya 900ml" + ".png" },
    { nome: "Água mineral sem gás 350ml", preco: 1.99, categoria: "Bebidas e refrigerantes", nomeImagem: "Água mineral sem gás 350ml" + ".png" },
    { nome: "Seleta legumes quero 170g", preco: 4.49, categoria: "O básico", nomeImagem: "Seleta legumes quero 170g" + ".png" },
    { nome: "Milho verde quero 170g", preco: 5.19, categoria: "O básico", nomeImagem: "Milho verde quero 170g" + ".png" },
    { nome: "Rap10 massa pronta 297g", preco: 10.63, categoria: "Padaria", nomeImagem: "Rap10 massa pronta 297g" + ".png" },
    { nome: "Doritos 84g", preco: 9.49, categoria: "Petiscos", nomeImagem: "Doritos 84g" + ".png" },
    { nome: "Batata Ruffle original 76g", preco: 10.29, categoria: "Petiscos", nomeImagem: "Batata Ruffle original 76g" + ".png" },
    { nome: "Fandangos sabor queijo 140g", preco: 14.89, categoria: "Petiscos", nomeImagem: "Fandangos sabor queijo 140g" + ".png" },
    { nome: "Cheetos 125g", preco: 14.89, categoria: "Petiscos", nomeImagem: "Cheetos 125g" + ".png" },
    { nome: "Amendoim yoki descascado 150g", preco: 5.89, categoria: "Petiscos", nomeImagem: "Amendoim yoki descascado 150g" + ".png" },
    { nome: "Pão forma pullman 400g", preco: 13.43, categoria: "Padaria", nomeImagem: "Pão forma pullman 400g" + ".png" },
    { nome: "Macarrão sem glutem Urbano", preco: 7.89, categoria: "O básico", nomeImagem: "Macarrão sem glutem Urbano" + ".png" },
    { nome: "Macarrão dona benta ovo", preco: 6.95, categoria: "O básico", nomeImagem: "Macarrão dona benta ovo" + ".png" },
    { nome: "Ração caẽs filhotes todos os tamanhos 100g", preco: 3.29, categoria: "Para os nossos pets", nomeImagem: "Ração caẽs filhotes todos os tamanhos 100g" + ".png" },
    { nome: "Ração gatos 1 ano em diante whiskas 85g", preco: 3.29, categoria: "Para os nossos pets", nomeImagem: "Ração gatos 1 ano em diante whiskas 85g" + ".png" },
    { nome: "Energético 250ml - Red Bull", preco: 14.9, categoria: "Bebidas e refrigerantes", nomeImagem: "Energético 250ml - Red Bull" + ".png" },
    { nome: "Skarloff Ice lata 269ml", preco: 7.49, categoria: "Bebidas e refrigerantes", nomeImagem: "Skarloff Ice lata 269ml" + ".png" },
    { nome: "Molho tomate quero 300g", preco: 3.67, categoria: "O básico", nomeImagem: "Molho tomate quero 300g" + ".png" },
    { nome: "Absorvente always P 10 absorventes", preco: 5.99, categoria: "Feminino", nomeImagem: "Absorvente always P 10 absorventes" + ".png" },
    { nome: "Papel higiênico floral perfumado 4uni", preco: 5.49, categoria: "Utensilios pro lar", nomeImagem: "Papel higiênico floral perfumado 4uni" + ".png" },
    { nome: "Água de coco sococo 200ml", preco: 3.49, categoria: "Bebidas e refrigerantes", nomeImagem: "Água de coco sococo 200ml" + ".png" },
    { nome: "6 ovos brancos", preco: 9.50, categoria: "O básico", nomeImagem: "6 ovos brancos" + ".png" },
    { nome: "Queijo prato duleit 150g", preco: 11.29, categoria: "Padaria", nomeImagem: "Queijo prato duleit 150g" + ".png" },
    { nome: "Salame Sadia Italiano 100g", preco: 17.59, categoria: "Padaria", nomeImagem: "Salame Sadia Italiano 100g" + ".png" },
    { nome: "Achocolatado em Pó 3 Corações 300g", preco: 6.59, categoria: "Padaria", nomeImagem: "Achocolatado em Pó 3 Corações 300g" + ".png" },
    { nome: "Margarina Deline com sal 500g", preco: 10.99, categoria: "Padaria", nomeImagem: "Margarina Deline com sal 500g" + ".png" },
    { nome: "Manteiga Cabeça de Touro 200g", preco: 19.50, categoria: "Padaria", nomeImagem: "Manteiga Cabeça de Touro 200g" + ".png" },
    { nome: "Massa de Pastel Faela 350g", preco: 8.79, categoria: "Padaria", nomeImagem: "Massa de Pastel Faela 350g" + ".png" },
    { nome: "Leite Condesado Moça Integral Lata 395g", preco: 13.95, categoria: "Doces e sobremesas", nomeImagem: "Leite Condesado Moça Integral Lata 395g" + ".png" },
    { nome: "Creme de Leite Nestle lata 300g", preco: 10.89, categoria: "O básico", nomeImagem: "Creme de Leite Nestle lata 300g" + ".png" },
    { nome: "Batata Palha Elma Chips 60g", preco: 7.50, categoria: "Padaria", nomeImagem: "Batata Palha Elma Chips 60g" + ".png" },
    { nome: "Milho de pipoca de microondas Yoki 100g", preco: 5.9, categoria: "Doces e sobremesas", nomeImagem: "Milho de pipoca de microondas Yoki 100g" + ".png" },
    { nome: "Milho de pipoca Kicaldo 500g", preco: 5.0, categoria: "Doces e sobremesas", nomeImagem: "Milho de pipoca Kicaldo 500g" + ".png" },
    { nome: "Sorvete Toya 2L Flocos", preco: 28.0, categoria: "Doces e sobremesas", nomeImagem: "Sorvete Toya 2L Flocos" + ".png" },
    { nome: "Sorvete Toya 2L Napolitano", preco: 28.0, categoria: "Doces e sobremesas", nomeImagem: "Sorvete Toya 2L Napolitano" + ".png" },
    { nome: "Sorvete Toya 2L Açai e Tapioca", preco: 28.0, categoria: "Doces e sobremesas", nomeImagem: "Sorvete Toya 2L Açai e Tapioca" + ".png" },
    { nome: "Cachaça 51", preco: 15.39, categoria: "Bebidas e refrigerantes", nomeImagem: "Cachaça 51" + ".png" },
    { nome: "Frango a passarinho seara 1kg", preco: 17.40, categoria: "Carnes e Frangos", nomeImagem: "Frango a passarinho seara 1kg" + ".png" },
    { nome: "Lasanha sadia bolonhesa 600g", preco: 24.50, categoria: "Comidas Congeladas", nomeImagem: "Lasanha sadia bolonhesa 600g" + ".png" },
    { nome: "Pão de queijo maricota lanche 300g", preco: 12.50, categoria: "Comidas Congeladas", nomeImagem: "Pão de queijo maricota lanche 300g" + ".png" },
    { nome: "Fixa Forte Espuma Extreme 12mm X 2 Metros 3M Suporta até 2,5kg", preco: 25.43, categoria: "Utensilios pro lar", nomeImagem: "Fixa Forte Espuma Extreme 12mm X 2 Metros 3M Suporta até 2,5kg" + ".png" },
    { nome: "Biscoito salgado Dux Salted 110g", preco: 6.60, categoria: "Petiscos", nomeImagem: "Biscoito salgado Dux Salted 110g" + ".png" },
    { nome: "Pilha AAA Panasonic Alcalina", preco: 16.89, categoria: "Utensilios pro lar", nomeImagem: "Pilha AAA Panasonic Alcalina" + ".png" },
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

