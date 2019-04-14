(function() {
  var tracks = ['audio/Ed Sheeran - shape of you.mp3', 'audio/Gigi  - In my mind.mp3', 'audio/Little Big - Faradenza.mp3', 'audio/Swanky Tunes lp - day by day.mp3',  'audio/The Sonics - Have Love Will Travel.mp3', 'audio/Mishlawi - All Night.mp3', 'audio/Noize MC - Brodsky Version.mp3', 'audio/Noize MC - Baby, listen.mp3', 'audio/Noize MC - Wisdom teeth.mp3'];
  var player = document.getElementById('player');
  var current = 0;

  var playTrack = function() {
    player.src = tracks[current];
    document.getElementById("name").innerHTML = tracks[current].slice(6, -4);
  }

  playTrack();

  var nextTrack = function() {
    current++;
    if (current >= tracks.length) current = 0;
    playTrack();
  }

  var previousTrack = function() {
    if (player.currentTime >= 5) {
      playTrack();
    } else {
      current--;
      if (current == -1) current = 4;
      playTrack();
    }
  }

  player.onended = function() {
    nextTrack();
  }

  document.documentElement.onclick = function() { previousTrack() }

  document.documentElement.oncontextmenu = function() { nextTrack() }

  document.oncontextmenu = new Function("return false;")
})()
