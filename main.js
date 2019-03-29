var startFrame = 0;
var endFrame = 0;
var framerate = 60;

var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "0",
    width: "0",
    videoId: "RgNIP2rHsbM"
  });
}

function loadVideo() {
  var vidId = youtubeParse(document.getElementById("video-link").value);
  
  if (vidId != false) {
    var el = document.querySelector("#player");
    el.parentNode.removeChild(el);
    var div = document.createElement("div");
    div.setAttribute("id", "player");
    document.getElementById("player-wrapper").appendChild(div);
    player = new YT.Player("player", {
      height: "0",
      width: "0",
      videoId: vidId
    });
  }
}

function updateFramerate() {
  framerate = document.getElementById("video-framerate").value;
}

window.onload = function() {
  document.getElementById("start-time").value = formatTime(0);
  document.getElementById("end-time").value = formatTime(0);
  document.getElementById("final-time").value = formatTime(0);
  document.getElementById("video-framerate").value = framerate;
};

function youtubeParse(url) {
  if (url.length < 11) {
    return false;
  } else if (url.length == 11) {
    return url;
  } else {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
  }
}

function getStartTime() {
  var f = startFrame = Math.floor(player.getCurrentTime() * framerate);
  document.getElementById("start-time").value = formatTime(f / framerate);
  getFinalTime();
}

function getEndTime() {
  var f = endFrame = Math.floor(player.getCurrentTime() * framerate);
  document.getElementById("end-time").value = formatTime(f / framerate);
  getFinalTime();
}

function getFinalTime() {
  var t = formatTime(((endFrame - startFrame) / framerate).toFixed(3));
  document.getElementById("final-time").value = t;
}

function formatTime(t) {
  var secs = Math.abs(t);
  var mins = Math.floor(secs / 60);
  var hrs = Math.floor(mins / 60);
  secs = (secs % 60).toFixed(3);
  mins = (mins % 60);
  hrs = ("0" + hrs).slice(-2) + ":";
  mins = ("0" + mins).slice(-2) + ":";
  secs = ("0" + secs).slice(-6);
  var time = hrs + mins + secs;
  if (t < 0) time = "-" + time;
  return time;
}

function seekStart() {
  var c = 0.5 / framerate;
  player.seekTo((startFrame / framerate) + c, true);
}

function seekEnd() {
  var c = 0.5 / framerate;
  player.seekTo((endFrame / framerate) + c, true);
}

function seekForward() {
  var t = player.getCurrentTime() + (1 / framerate);
  player.seekTo(t, true);
}

function seekBackward() {
  var t = player.getCurrentTime() - (1 / framerate);
  player.seekTo(t, true);
}

function togglePlay() {
  if (player.getPlayerState() == 1) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
}

function copyFinalTime() {
  var str = document.getElementById("final-time").value;
  var el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};
