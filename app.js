function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    section.innerHTML = ""; // Limpa resultados anteriores

    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    // Se campoPesquisa for uma string vazia
    if (!campoPesquisa) {
        const mensagem = document.createElement("div");
        mensagem.className = "mensagem"; // Certifique-se de adicionar a classe correta
        mensagem.textContent = "Nada foi encontrado. Você precisa digitar o nome de um dorama.";
        section.appendChild(mensagem); // Adiciona a mensagem ao final da seção
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        const titulo = dado.titulo.toLowerCase();
        const descricao = dado.descricao.toLowerCase();
        const tags = dado.tags.toLowerCase();

        // Se titulo inclui campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento com mais informações
            resultados += `
            <div class="item-resultado">
                <img src="${dado.imagem}" alt="${dado.titulo}" class="imagem-dorama">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="info-adicional">🗓️ Ano: ${dado.ano}</p>
                <p class="info-adicional">🎬 Episódios: ${dado.episodios}</p>
                <p class="info-adicional">👥 Elenco: ${dado.elenco.join(", ")}</p>
                <p class="info-adicional">📺 Plataforma: ${dado.plataforma}</p>
                <p class="info-adicional">⭐ Nota: ${dado.nota}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    // Se não houver resultados
    if (!resultados) {
        const mensagem = document.createElement("div");
        mensagem.className = "mensagem";
        mensagem.textContent = "Nada foi encontrado. Você precisa digitar o nome de um dorama.";
        section.appendChild(mensagem);
    } else {
        // Atribui os resultados gerados à seção HTML
        section.innerHTML = resultados;
    }
}
