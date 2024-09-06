function pesquisar()
{
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(campoPesquisa == "")
    {
        section.innerHTML = "<p>Nada foi encontrado!</p>"
        return;
    }

    campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tag = "";

        for(let dado of dados)
        {
            titulo = dado.titulo.toLowerCase();
            descricao = dado.descricao.toLowerCase();
            tag = dado.tags.toLowerCase(); 
            if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa))
            {
                resultados += `
                <div class="item-resultado">
                        <h2>
                            <a href="#" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                            <a href="${dado.link}" target="_blank">Mais Informações</a>
                </div>`
            }
        }
        if(!resultados)
        {
            section.innerHTML = `<p>${campoPesquisa} não foi encontrado!</p>`
            //section.innerHTML = "<p>Nada foi encontrado!!!</p>"
            return;
        }

    section.innerHTML = resultados;
}

