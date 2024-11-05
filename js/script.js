const characterData = [ 
    { imagen: 'images/AlisaBosconovitch.png', audio: 'audio/Alisa.mp3', width:'500px' }, 
    { imagen: 'images/AsukaKazama.png', audio: 'audio/Asuka.mp3', width:'200px' }, 
    { imagen: 'images/AzucenaMilagrosOrtizCastillos.png', audio: 'audio/Azucena.mp3', width:'200px' } 
];

function showRandomCharacterXD() { 
    const randomCharacterPick = characterData[Math.floor(Math.random() * characterData.length)]; 
    
    const img = document.getElementById('img'); 
    img.src = randomCharacterPick.imagen; 
    img.style.width = randomCharacterPick.width;

    const characterSound = document.getElementById('ss'); 
    characterSound.src = randomCharacterPick.audio; 
    characterSound.play(); 
}