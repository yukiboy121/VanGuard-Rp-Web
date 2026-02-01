// YouTube IFrame API Implementation
let player;
let isPlaying = false; // Start as false to be safe

function onYouTubeIframeAPIReady() {
    player = new YT.Player('hero-player', {
        videoId: 'VLkOQJoeGPE',
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'mute': 1,
            'loop': 1,
            'playlist': 'VLkOQJoeGPE',
            'showinfo': 0,
            'modestbranding': 1,
            'rel': 0,
            'fs': 0,
            'disablekb': 1,
            'iv_load_policy': 3,
            'playsinline': 1, // Critical for iOS autoplay
            'origin': window.location.origin
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    const videoToggleBtn = document.getElementById('hero-video-toggle');
    if (!videoToggleBtn) return;
    
    const icon = videoToggleBtn.querySelector('i');
    
    // YT.PlayerState: UNSTARTED (-1), ENDED (0), PLAYING (1), PAUSED (2), BUFFERING (3), CUED (5)
    if (event.data === YT.PlayerState.PLAYING) {
        isPlaying = true;
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        videoToggleBtn.setAttribute('aria-label', 'Pause Video');
    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
        isPlaying = false;
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        videoToggleBtn.setAttribute('aria-label', 'Play Video');
    }
}

// Play/Pause Button Logic
document.addEventListener('DOMContentLoaded', () => {
    const videoToggleBtn = document.getElementById('hero-video-toggle');
    if (videoToggleBtn) {
        videoToggleBtn.addEventListener('click', function() {
            if (!player || typeof player.pauseVideo !== 'function') return;

            if (isPlaying) {
                player.pauseVideo();
            } else {
                player.playVideo();
            }
        });
    }
});
