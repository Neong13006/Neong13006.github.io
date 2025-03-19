let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let sourceNode = null;
let gainNode = audioContext.createGain();
let pitchValue = 1.0; // 1.0 = normal, 2.0 = +1 octave, 0.5 = -1 octave

// Fonction pour charger et jouer un son
function playSound(audioFileUrl) {
    if (sourceNode) {
        sourceNode.stop();
    }

    fetch(audioFileUrl)
        .then(response => response.arrayBuffer())
        .then(data => audioContext.decodeAudioData(data))
        .then(buffer => {
            sourceNode = audioContext.createBufferSource();
            sourceNode.buffer = buffer;
            sourceNode.loop = true; // Jouer en boucle
            sourceNode.playbackRate.value = pitchValue; // Appliquer la hauteur actuelle

            sourceNode.connect(gainNode);
            gainNode.connect(audioContext.destination);
            sourceNode.start();
        })
        .catch(error => console.error("Erreur de chargement du son :", error));
}

// Fonction pour modifier la hauteur du son
function setPitch(semitones) {
    pitchValue = Math.pow(2, semitones / 12); // Conversion en ratio de fréquence
    if (sourceNode) {
        sourceNode.playbackRate.value = pitchValue;
    }
}

// Exemple d'utilisation
//playSound("https://www.dl.dropboxusercontent.com/scl/fi/wo6mtegf9exmfoozqggcg/Gambino.mp3?rlkey=9u3u8ha0ee73d6qcij9ql25wx&st=rqw817gj&dl=0"); // Remplace avec ton URL
setPitch(3); // Monte de 3 demi-tons


// lien de la musique si ce n'est pas possible de modifier directement VNTM.webm ->>>>> https://www.dl.dropboxusercontent.com/scl/fi/wo6mtegf9exmfoozqggcg/Gambino.mp3?rlkey=9u3u8ha0ee73d6qcij9ql25wx&st=rqw817gj&dl=0