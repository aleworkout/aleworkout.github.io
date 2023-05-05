const enviarMensagem = () => {
    // Obtém o nome do cliente, o bloco e o apartamento
    const nomeCliente = document.getElementById("nome").value;
    const bloco = document.getElementById("bloco").value;
    const apartamento = document.getElementById("apartamento").value;

    // Obtém o tempo de entrega
    const tempoEntrega = document.getElementById("tempo").value;

    // Monta a mensagem com a lista de produtos
    let mensagem = "=> Aqui está o meu pedido:\n";
    produtos.forEach(produto => {
        const inputQuantidade = document.getElementById(`${produto.nome}-quantidade`);
        const quantidade = parseFloat(inputQuantidade.value);
        const spanSubtotal = document.getElementById(`${produto.nome}-subtotal`);
        const subtotal = quantidade * produto.preco;
        if (quantidade > 0) {
            mensagem += `${quantidade} ${produto.nome} // R$${subtotal.toFixed(2)}\n`;
        }
    });

    // Obtém o total do pedido
    const totalElement = document.getElementById("total");

    const total = totalElement.innerText;
    const totalValue = parseFloat(total.match(/[\d\.]+/)[0])
    console.log("total" + totalValue);

    // Adiciona os dados do cliente à mensagem
    mensagem += `\n=> Cobrar de ${nomeCliente} no Bloco ${bloco} Apto ${apartamento}\n`;

    // Adiciona o tempo de entrega à mensagem
    mensagem += `=> Entregar em ${tempoEntrega} minutos\n\n`;

    // Adiciona o total à mensagem
    mensagem += `*=> Total: R$${totalValue.toFixed(2)}*\n\n`;

    // Adiciona PIX
    mensagem += `Pix: 706.531.372-73\n`;

    // Adiciona beneficiario PIX
    mensagem += `Alejandro González Navarro`;

    // Monta o link para o WhatsApp
    const link = `https://api.whatsapp.com/send?phone=5592982434994&text=${encodeURIComponent(mensagem)}`;

    // Abre o link no WhatsApp
    window.open(link);
};

// Adiciona o evento de clique ao botão "Enviar mensagem"
const botaoEnviar = document.getElementById("enviarFormulario");
botaoEnviar.addEventListener("click", enviarMensagem);
