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
        "O milagre da vida é um presente precioso,",
        "uma celebração do amor e da esperança que transformam nosso mundo.",
        "Desde o momento em que um pequeno coração começa a bater,",
        "cada dia é uma promessa de novas descobertas e alegrias.",
        "Desde o momento em que um pequeno coração começa a bater,",
        "Estar à espera de uma nova vida é embarcar em uma jornada repleta de beleza,",
        "força e amor incondicional.",
        "Cada movimento e cada som são sinais de um novo capítulo,",
        "onde o amor e a felicidade se entrelaçam de maneiras extraordinárias.",
        "Ser mãe é experimentar o amor mais puro e a alegria mais genuína,",
        "é entrar em uma nova fase cheia de maravilhas e crescimento.",
        "A espera por esse novo ser é uma viagem emocionante,",
        "iluminada pela esperança e pela magia de trazer uma nova vida ao mundo.",
        "O momento de dar à luz é um dos maiores dons que a vida pode oferecer,",
        "um milagre que ilumina o caminho com promessas e sonhos.",
        "Prepare-se para uma jornada onde cada batida do coração,",
        "cada descoberta,",
        "será uma celebração da vida e do amor que transcende tudo."
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
                    setTimeout(typeCharacter, 120); // Velocidade da digitação de cada caractere
                } else {
                    currentLine++;
                    setTimeout(typeStoryLine, 3000); // Pausa de 3 segundos entre cada linha
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
