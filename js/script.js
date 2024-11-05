const characterData = [ 
    { imagen: 'images/AlisaBosconovitch.png', audio: 'audio/Alisa.mp3', width:'400px' }, 
    { imagen: 'images/AsukaKazama.png', audio: 'audio/Asuka.mp3', width:'200px' }, 
    { imagen: 'images/AzucenaMilagrosOrtizCastillos.png', audio: 'audio/Azucena.mp3', width:'200px' },
    { imagen: 'images/BryanFury.png', audio: 'audio/BryanLaugh.mp3', width:'200px' },
    { imagen: 'images/ClaudioSerafino.png', audio: 'audio/Claudio.mp3', width:'325px' },
    { imagen: 'images/DevilJin.png', audio: 'audio/DevilJinLaugh.mp3', width:'700px' },   
    { imagen: 'images/EddyGordo.png', audio: 'audio/Eddy.mp3', width:'355px' },
    { imagen: 'images/FeiWang.png', audio: 'audio/Feng.mp3', width:'410px' },
    { imagen: 'images/HeihachiMishima.png', audio: 'audio/Heihachi.mp3', width:'330px' },
    { imagen: 'images/Hwoarang.png', audio: 'audio/Hwoarang.mp3', width:'300px' },
    { imagen: 'images/Jack-8.png', audio: 'audio/Jack-8.mp3', width:'380px' },
    { imagen: 'images/JinKazama.png', audio: 'audio/Jin.mp3', width:'200px' },
    { imagen: 'images/JunKazama.png', audio: 'audio/Jun.mp3', width:'250px' },
    { imagen: 'images/KazuyaMishima.png', audio: 'audio/Kazuya.mp3', width:'240px' },
    { imagen: 'images/King.png', audio: 'audio/King.mp3', width:'400px' },
    { imagen: 'images/Kuma.png', audio: 'audio/Kuma.mp3', width:'300px' },
    { imagen: 'images/LarsAlexandersson.png', audio: 'audio/Lars.mp3', width:'400px' },
    { imagen: 'images/LeeChaolan.png', audio: 'audio/Lee.mp3', width:'400px' },
    { imagen: 'images/LeoKilsen.png', audio: 'audio/Leo.mp3', width:'230px' },
    { imagen: 'images/LeroySmith.png', audio: 'audio/Leroy.mp3', width:'270px' },
    { imagen: 'images/LidiaSobieska.png', audio: 'audio/Lidia.mp3', width:'400px' },
    { imagen: 'images/LiliRechefort.png', audio: 'audio/Lili.mp3', width:'210px' },
    { imagen: 'images/LingXiaoyu.png', audio: 'audio/Xiaoyu.mp3', width:'220px' },
    { imagen: 'images/MarshallLaw.png', audio: 'audio/Law.mp3', width:'300px' },
    { imagen: 'images/NinaWilliams.png', audio: 'audio/Nina.mp3', width:'228px' },
    { imagen: 'images/Panda.png', audio: 'audio/Panda.mp3', width:'450px' },
    { imagen: 'images/PaulPhoenix.png', audio: 'audio/Paul.mp3', width:'240px' },
    { imagen: 'images/Raven.png', audio: 'audio/Raven.mp3', width:'440px' },
    { imagen: 'images/ReinaMishima.png', audio: 'audio/Reina.mp3', width:'230px' },
    { imagen: 'images/SergeiDragunov.png', audio: 'audio/Dragunov.mp3', width:'250px' },
    { imagen: 'images/Shaheen.png', audio: 'audio/Shaheen.mp3', width:'360px' },
    { imagen: 'images/SteveFox.png', audio: 'audio/Steve.mp3', width:'340px' },
    { imagen: 'images/VictorChevalier.png', audio: 'audio/Victor.mp3', width:'250px' },
    { imagen: 'images/Yoshimitsu.png', audio: 'audio/Yoshimitsu.mp3', width:'410px' },
    { imagen: 'images/Zafina.png', audio: 'audio/Zafina.mp3', width:'290px' }
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