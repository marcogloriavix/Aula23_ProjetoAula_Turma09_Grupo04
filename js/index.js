/*
<div class="anime-container">
    <img src="./assets/one-piece.jpg" alt="imagem do anime one-piece" />
    <h3>One piece</h3>
    <p>
        One Piece, criado por Eiichiro Oda, é uma série de aventura que segue
        Monkey D. Luffy e sua tripulação de piratas enquanto exploram o mundo em
        busca do tesouro conhecido como One Piece.
    </p>
</div>;
*/
function adicionarAnime() {
    // Obter valores do formulario
    let nomeAnime = document.getElementById("anime-name").value;
    let descricaoAnime = document.getElementById("descricao-anime").value;
    let urlAnime = document.getElementById("anime-image").value;

    // Criar um elemento div
    let novoAnime = document.createElement("div");
    novoAnime.className = "anime-container";

    let novaImagemAnime = document.createElement("img");
    novaImagemAnime.src = urlAnime;
    novaImagemAnime.alt = nomeAnime;

    let h3NovoAnime = document.createElement("h3");
    h3NovoAnime.textContent = nomeAnime;

    let pNovoANime = document.createElement("p");
    pNovoANime.textContent = descricaoAnime;

    novoAnime.appendChild(novaImagemAnime);
    novoAnime.appendChild(h3NovoAnime);
    novoAnime.appendChild(pNovoANime);
    
    let secaoAnimes = document.getElementById("blog-container");
    secaoAnimes.appendChild(novoAnime);
}
