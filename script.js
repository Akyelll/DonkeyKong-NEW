/* Configuração da galeria */

/* Função responsável por abrir a imagem ampliada */
function abrirImagem(img) { 
    // "img" representa a imagem que foi clicada (enviada pelo "this")

    const lightbox = document.getElementById("lightbox"); 
    // Busca no HTML o elemento com id="lightbox"
    // Esse é o fundo escuro que cobre a tela inteira

    const imagemGrande = document.getElementById("imagemGrande"); 
    // Busca o elemento onde a imagem ampliada será exibida

    imagemGrande.src = img.src; 
    // Define o src da imagem grande igual ao src da imagem clicada
    // Ou seja, copia a imagem selecionada

    lightbox.style.display = "flex"; 
    // Muda o display de "none" para "flex"
    // Isso faz o lightbox aparecer na tela
}



/* Função responsável por fechar a imagem */
function fecharImagem(event) { 
    // "event" contém informações sobre o clique realizado

    if (event.target.id === "lightbox") { 
        // Verifica se o clique foi no fundo escuro (lightbox)
        // Se clicar diretamente na imagem grande, não fecha

        document.getElementById("lightbox").style.display = "none"; 
        // Esconde novamente o lightbox
        // A imagem desaparece da tela
    }
}
const botao = document.getElementById("temaBtn");

botao.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});