'strict';
// For the self-titled rock crown album
const rockCrownLP = [
    {
        name: 'Working On Our Love Tonight',
        path: 'RC Music Files/01WorkingOnOurLoveTonight.wav',
        artist: 'Rock Crown',
        album: 'Rock Crown',
        runtime: '4:58',
    },
    {
        name: 'Hearts of Fire',
        path: 'RC Music Files/02HeartsOfFire.wav',
        artist: 'Rock Crown',
        album: 'Rock Crown',
        runtime: '3:33',
    },
    {
        name: 'Burning Flame',
        path: 'RC Music Files/03BurningFlame.wav',
        artist: 'Rock Crown',
        album: 'Rock Crown',
        runtime: '3:37',
    },
    {
        name: 'Stryker Street',
        path: 'RC Music Files/04StrykerStreet.wav',
        artist: 'Rock Crown',
        album: 'Rock Crown',
        runtime: '4:28',
    },
    {
        name: 'Ludlow',
        path: 'RC Music Files/05Ludlow.wav',
        artist: 'Rock Crown',
        album: 'Rock Crown',
        runtime: '4:01',
    },
    {
        name: `I'll wait for you`,
        path: 'RC Music Files/06IllWaitForYou.wav',
        artist: 'Rock Crown',
        album: 'Rock Crown',
        runtime: '3:52',
    },
    {
        name: 'Another Way',
        path: 'RC Music Files/07AnotherWay.wav',
        artist: 'Rock Crown',
        album: 'Rock Crown',
        runtime: '3:47',
    },
    {
        name: `Lookin' For Your Love`,
        path: 'RC Music Files/08LookinForYourLove.wav',
        artist: 'Rock Crown',
        album: 'Rock Crown',
        runtime: '3:27',
    },
];

// Selecting all the DOM elements
const musicPlayer = document.querySelector('#music-player1');
const navBar = document.querySelector('.nav-bar');
const navBarList = document.querySelector('.nav-bar--list');
const songName = document.querySelector('#music--player, p#cur-sng');
const artistName = document.querySelector('#music--player, p#cur-sng-art');
const albumName = document.querySelector('#music--player, p#cur-sng-albm');
const playPauseBtns = document.querySelectorAll('.play-pause-btn');
const firstSong = document.querySelector('#first--song p1');
const firstSongRunTime = document.querySelector('#first--song p2');
const secondSong = document.querySelector('#second--song p1');
const secondSongRunTime = document.querySelector('#second--song p2');
const thirdSong = document.querySelector('#third--song p1');
const thirdSongRunTime = document.querySelector('#third--song p2');
const fourthSong = document.querySelector('#fourth--song p1');
const fourthSongRunTime = document.querySelector('#fourth--song p2');
const fifthSong = document.querySelector('#fifth--song p1');
const fifthSongRunTime = document.querySelector('#fifth--song p2');
const sixthSong = document.querySelector('#sixth--song p1');
const sixthSongRunTime = document.querySelector('#sixth--song p2');
const seventhSong = document.querySelector('#seventh--song p1');
const seventhSongRunTime = document.querySelector('#seventh--song p2');
const eighthSong = document.querySelector('#eighth--song p1');
const eighthSongRunTime = document.querySelector('#eighth--song p2');

// Creating the music player

let currentSong;
currentSong = rockCrownLP[0];
songName.textContent = currentSong.name;
artistName.textContent = currentSong.artist;
albumName.textContent = currentSong.album;
musicPlayer.src = currentSong.path;
let currentSongIndex = 0;

firstSong.textContent = rockCrownLP[0].name;
firstSongRunTime.textContent = rockCrownLP[0].runtime;
secondSong.textContent = rockCrownLP[1].name;
secondSongRunTime.textContent = rockCrownLP[1].runtime;
thirdSong.textContent = rockCrownLP[2].name;
thirdSongRunTime.textContent = rockCrownLP[2].runtime;
fourthSong.textContent = rockCrownLP[3].name;
fourthSongRunTime.textContent = rockCrownLP[3].runtime;
fifthSong.textContent = rockCrownLP[4].name;
fifthSongRunTime.textContent = rockCrownLP[4].runtime;
sixthSong.textContent = rockCrownLP[5].name;
sixthSongRunTime.textContent = rockCrownLP[5].runtime;
seventhSong.textContent = rockCrownLP[6].name;
seventhSongRunTime.textContent = rockCrownLP[6].runtime;
eighthSong.textContent = rockCrownLP[7].name;
eighthSongRunTime.textContent = rockCrownLP[7].runtime;

const playSong = songIndex => {
    currentSong = rockCrownLP[songIndex];
    musicPlayer.src = currentSong.path;
    musicPlayer.play();
    songName.textContent = currentSong.name;
    artistName.textContent = currentSong.artist;
    albumName.textContent = currentSong.album;
};

playPauseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const songIndex = btn.dataset.songIndex;
        if (musicPlayer.paused) {
            playSong(songIndex);
            musicPlayer.play();
            btn.src = 'RC Main imgs/pause_icon.png';
            currentSongIndex = songIndex; // Update the currentSongIndex variable
        } else {
            musicPlayer.pause();
            btn.src = 'RC Main imgs/play_icon.png';
        }
    });

    btn.addEventListener('mouseover', () => {
        btn.style.cursor = 'pointer';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.cursor = 'default';
    });
});

musicPlayer.addEventListener('pause', () => {
    playPauseBtns.forEach(btn => {
        btn.src = 'RC Main imgs/play_icon.png';
    });
});

musicPlayer.addEventListener('play', () => {
    playPauseBtns.forEach(btn => {
        const songIndex = btn.dataset.songIndex;
        if (songIndex == currentSongIndex) {
            btn.src = 'RC Main imgs/pause_icon.png';
        } else {
            btn.src = 'RC Main imgs/play_icon.png';
        }
    });
});
