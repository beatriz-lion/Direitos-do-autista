// Espera o documento carregar
document.addEventListener('DOMContentLoaded', () => {

    // Encontra todos os hotspots da página
    const hotspots = document.querySelectorAll('.hotspot');

    // Função para parar TODOS os áudios e fechar TODAS as caixas
    function pararTudo() {
        // Para todos os áudios
        document.querySelectorAll('.audio-transcricao').forEach(audio => {
            audio.pause();      // Pausa o áudio
            audio.currentTime = 0; // Volta o áudio para o início
        });
        
        // Esconde todas as caixas de texto
        document.querySelectorAll('.info-box').forEach(infoBox => {
            infoBox.classList.remove('visivel');
        });
    }

    // Para cada hotspot encontrado...
    hotspots.forEach(hotspot => {
        
        // Pega os elementos importantes DENTRO de cada hotspot
        const infoBox = hotspot.querySelector('.info-box');
        const audio = hotspot.querySelector('.audio-transcricao');

        // Adiciona um "ouvidor de CLIQUE"
        hotspot.addEventListener('click', (e) => {
            // Isso impede que um clique no hotspot seja interpretado
            // como um clique "fora" (veja o código mais abaixo)
            e.stopPropagation();

            // Verifica se este popup já está visível
            const estaVisivel = infoBox.classList.contains('visivel');

            // 1. Antes de tudo, para tudo o que estiver tocando
            pararTudo();

            // 2. Se NÃO estava visível, agora nós mostramos e tocamos
            if (!estaVisivel) {
                // Mostra a caixa de texto
                if (infoBox) {
                    infoBox.classList.add('visivel');
                }
                // Toca o áudio
                if (audio) {
                    audio.play();
                }
            }
            // Se já estava visível, a função pararTudo() já cuidou de fechar.
        });
    });

    // Opcional: Clicar em qualquer lugar FORA de um hotspot fecha tudo
    document.addEventListener('click', () => {
        pararTudo();
    });
});