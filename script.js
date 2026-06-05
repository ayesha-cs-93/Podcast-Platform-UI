let isPlaying = false;

function playPodcast(title, artist, gradientColor) {
    const playerTitle = document.getElementById('player-track-title');
    const playerArtist = document.getElementById('player-track-artist');
    const playerThumb = document.getElementById('player-track-thumb');
    const playBtnIcon = document.getElementById('main-play-btn').querySelector('i');

    // Title aur Artist ko update karne ke liye
    playerTitle.innerText = title;
    playerArtist.innerText = artist;
    
    // Background rang badalne aur purane musical icon ko hatane ke liye
    playerThumb.style.background = gradientColor;
    playerThumb.innerHTML = ""; 
    
    // Choti si smooth pop animation ke liye
    playerThumb.style.transform = "scale(1.05)";
    setTimeout(() => { playerThumb.style.transform = "scale(1)"; }, 200);

    isPlaying = true;
    playBtnIcon.className = "fa-solid fa-circle-pause";
}

document.getElementById('main-play-btn').addEventListener('click', function() {
    const icon = this.querySelector('i');
    if (isPlaying) {
        icon.className = "fa-solid fa-circle-play";
        isPlaying = false;
    } else {
        if (document.getElementById('player-track-title').innerText !== "Select a podcast") {
            icon.className = "fa-solid fa-circle-pause";
            isPlaying = true;
        }
    }
});
