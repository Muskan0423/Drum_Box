const drums = [
    { sound: 'crash.mp3', image: 'crash.png', key: 'A' },
    { sound: 'kick.mp3', image: 'drummer.avif', key: 'B' },
    { sound: 'snare.mp3', image: 'snare.png', key: 'C' },
    { sound: 'tom.mp3', image: 'tom.png', key: 'D' },
];

const rightDiv = document.getElementById('right');

function createBox(drum) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.setAttribute('data-sound', drum.sound);

    const img = document.createElement('img');
    img.src = drum.image;
    img.alt = `Drum ${drum.key}`;
    
    const keyDiv = document.createElement('div');
    keyDiv.classList.add('key');
    keyDiv.textContent = drum.key;

    box.appendChild(img);
    box.appendChild(keyDiv);

    box.addEventListener('click', () => playSound(drum.sound));

    return box;
}

function playSound(sound) {
    const audio = new Audio(sound);
    audio.play();
}

drums.forEach(drum => {
    const drumBox = createBox(drum);
    rightDiv.appendChild(drumBox);
});
document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase(); 
    const drum = drums.find(drum => drum.key === key);
    if (drum) {
        playSound(drum.sound);
    }
});
