document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos HTML
    const playButton = document.getElementById('play-button');
    const infiniteModeButton = document.querySelector('a[href="../infinite-mode/index.html"]');
    const creditsButton = document.getElementById('credits-button');
    const menuMusic = document.getElementById('menu-music');

    // Tenta tocar a música assim que a página carrega.
    // A maioria dos navegadores bloqueia isso, então o evento de clique é a garantia.
    menuMusic.play().catch(error => {
        console.log("A reprodução automática de áudio foi bloqueada. A música tocará ao interagir com a página.");
    });

    // Adiciona um evento de clique em todo o documento para iniciar a música
    // Isso resolve o problema de navegadores que bloqueiam o autoplay.
    // O '{ once: true }' garante que o evento só seja executado uma vez.
    document.addEventListener('click', () => {
        if (menuMusic.paused) {
            menuMusic.play().catch(error => {
                console.log("Falha ao tocar a música após a interação do usuário.");
            });
        }
    }, { once: true });

    // Manipulador para o botão "Jogar"
    playButton.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que o link navegue imediatamente
        
        // Exemplo: Pausa a música do menu e redireciona para a próxima fase.
        // menuMusic.pause();
        // window.location.href = '../fase1/index.html';
        
        // Mensagem temporária para teste
        alert('Preparando o jogo... (Em breve!)'); 
    });

    // Manipulador para o botão "Créditos"
    creditsButton.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que o link navegue imediatamente
        
        // Exemplo: Você pode criar uma função para exibir a tela de créditos.
        // showCreditsScreen(); 
        
        // Mensagem temporária para teste
        alert('Mostrando os créditos... (Em breve!)'); 
    });
});