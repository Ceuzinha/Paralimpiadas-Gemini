

function actionBusca(event){
    let styleBody = document.getElementsByTagName("body")[0];
    styleBody.style.overflowY = "auto";
    // importante !, permite que o scroll seja liberado. 
    let searchInput = document.getElementById("search-input").value;
    let section = document.getElementById("resultado-busca");
    let pesquisa = '';
    let titulo = '';
    let descricao ='';

    searchInput = searchInput.toLocaleLowerCase();

    if(!searchInput){
        section.innerHTML = `<p> Não encontramos oque procura...</p>`;
        styleBody.style.overflowY = "hidden";
        event.preventDefault();
        return
    }

    for(let atleta of atletas) {
        titulo = atleta.titulo.toLowerCase();
        descricao = atleta.descricao.toLocaleLowerCase();

        if(titulo.includes(searchInput) || descricao.includes(searchInput)){
            pesquisa +=`
                <div class="resultadoBusca">
                    <h2 class="nomeAtleta">${atleta.titulo}</h2>
                    <p class="textoAtleta">${atleta.descricao}</p>
                    <a href="${atleta.link}" target="_blank" > Instagram</a>
                </div>    
            `;
        } 
    }

    if(pesquisa === ''){
        pesquisa = `<p> Não encontramos oque procura...</p><p>Dica: Procure por modalide ou atleta. </p>`;
        styleBody.style.overflowY = "hidden";
    }


    section.innerHTML = pesquisa;
    event.preventDefault();
}

