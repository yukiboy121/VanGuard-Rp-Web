// YouTube IFrame API Implementation
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('hero-player', {
        videoId: 'VLkOQJoeGPE', // The video ID
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'mute': 1,
            'loop': 1,
            'playlist': 'VLkOQJoeGPE', // Required for loop to work
            'showinfo': 0,
            'modestbranding': 1,
            'rel': 0,
            'fs': 0,
            'disablekb': 1,
            'iv_load_policy': 3
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    event.target.mute();
}

// Play/Pause Button Logic
const videoToggleBtn = document.getElementById('hero-video-toggle');
let isPlaying = true;

if (videoToggleBtn) {
    videoToggleBtn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        
        if (isPlaying) {
            player.pauseVideo();
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
            this.setAttribute('aria-label', 'Play Video');
        } else {
            player.playVideo();
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            this.setAttribute('aria-label', 'Pause Video');
        }
        isPlaying = !isPlaying;
    });
}
