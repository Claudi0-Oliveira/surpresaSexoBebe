window.onload = function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const revealScreen = document.querySelector('.reveal-screen');
    const messageDisplay = document.getElementById('message-display');
    const revealButton = document.getElementById('reveal-button');

    // Exibir o botão após a animação de flutuação inicial
    setTimeout(() => {
        revealButton.classList.remove('hidden');
    }, 3000); // Tempo de flutuação antes de mostrar o botão

    // Adicionar evento de clique ao botão para iniciar a transição
    revealButton.addEventListener('click', () => {
        loadingScreen.style.backgroundColor = '#b30059'; // Mudança para um rosa mais escuro
        revealButton.style.display = 'none'; // Esconder o botão

        setTimeout(() => {
            loadingScreen.style.display = 'none';
            revealScreen.style.display = 'flex';
            revealScreen.style.backgroundColor = '#b30059'; // Certifica que o fundo permaneça rosa escuro
            showFinalMessage();
        }, 3000); // Tempo para a transição de cor
    });

    // Mostrar a mensagem final
    function showFinalMessage() {
        const messages = [
            "Parabéns, amor!",
            "Vamos ter uma menina!"
        ];

        let currentMessage = 0;

        function showMessage() {
            if (currentMessage < messages.length) {
                messageDisplay.classList.remove('show');
                setTimeout(() => {
                    messageDisplay.textContent = messages[currentMessage];
                    messageDisplay.classList.add('show');
                    currentMessage++;
                    setTimeout(showMessage, 3000);
                }, 1000);
            }
        }

        showMessage();
    }
}
