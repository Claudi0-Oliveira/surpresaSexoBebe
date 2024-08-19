window.onload = function() {
    const startScreen = document.getElementById('start-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const revealScreen = document.getElementById('reveal-screen');
    const messageDisplay = document.getElementById('message-display');
    const storyDisplay = document.getElementById('story-display');
    const revealButton = document.getElementById('reveal-button');
    const startButton = document.getElementById('start-button');
    const backgroundMusic = document.getElementById('background-music');

    // Função para iniciar a tela de carregamento e a música
    startButton.addEventListener('click', () => {
        startScreen.style.display = 'none'; // Esconder tela de início
        loadingScreen.classList.remove('hidden'); // Mostrar tela de carregamento
        backgroundMusic.play(); // Iniciar a música
        typeStoryLine(); // Iniciar a digitação da história
    });

    // Texto da historinha, dividido em linhas
    const story = [
        "O milagre da vida começa com um pequeno coração,",
        "batendo forte e cheio de esperança.",
        "Uma jornada incrível se inicia,",
        "cheia de sonhos, amor e descobertas..."
    ];
    let currentLine = 0;

    // Função para digitar a história linha por linha
    function typeStoryLine() {
        if (currentLine < story.length) {
            storyDisplay.textContent = ''; // Limpa o texto anterior
            let charIndex = 0;

            function typeCharacter() {
                if (charIndex < story[currentLine].length) {
                    storyDisplay.textContent += story[currentLine][charIndex];
                    charIndex++;
                    setTimeout(typeCharacter, 50); // Velocidade da digitação de cada caractere
                } else {
                    currentLine++;
                    setTimeout(typeStoryLine, 1000); // Pausa de 1 segundo entre cada linha
                }
            }

            typeCharacter();
        } else {
            setTimeout(() => {
                revealButton.classList.remove('hidden'); // Mostrar o botão suavemente após 3 segundos
            }, 3000);
        }
    }

    // Adicionar evento de clique ao botão para iniciar a transição
    revealButton.addEventListener('click', () => {
        loadingScreen.style.backgroundColor = '#b30059'; // Mudança para um rosa mais escuro
        revealButton.style.display = 'none'; // Esconder o botão

        setTimeout(() => {
            loadingScreen.style.display = 'none';
            revealScreen.classList.remove('hidden');
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
