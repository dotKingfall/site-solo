var songname = "None";
var singer = "None";
var lyricswriter = "None";
var date = "None";
var vocalprod = "None";
var copyright = "None";
var distributor = "None";
var duration = "00s";

//SONG INFO END

var musicPlaying = false; //Se alguma música estiver tocando, essa variável deve ser true
function playsong(c, n = 0){
  //
}

function shouldOverflow(){
  element = document.getElementById("song_name");
  if(element.offsetWidth >= 168){
    element.style.transform = "translateX(60%)";
    element.style.animationPlayState = "running";
  }
}

function copysongname(){
  var copymessage = document.getElementById("copybutton").children[1];
  navigator.clipboard.writeText(`${songname} - ${singer}`).then(() => {
    if(copymessage.innerText === "COPIAR") copymessage.innerText = "COPIADO!";
  })
  .catch(() => {
    if(copymessage.innerText === "COPIAR") copymessage.innerText = "NÃO COPIADO! (MOBILE)";
  });
  setTimeout(function (){copymessage.innerText = "COPIAR"}, 2000);
}

var player_active = false;
function showPlayer(){
  ple = document.getElementById("playerws");
  if(player_active == false){
    ple.style.transform = "translateX(0px)";
    ple.style.visibility = "visible";
    shouldOverflow();
    player_active = true;
  }
  else{
    ple.style.transform = "translateX(-180px)";
    ple.style.visibility = "hidden";
    player_active = false;
  }
}

var is_paused = false;
function play_pause(el){
  if(!is_paused){
    el.src = "helpers/player/pause.svg";
    is_paused = true;
  }
  else{
    el.src = "helpers/player/play.svg";
    is_paused = false;
  }
}

var currentVol = 100;
var no_sound = 0;
function volControl(vol){
  document.getElementById('volumenumber').innerText = vol;
  document.getElementById("volume").children[1].src = "helpers/player/sound.svg";
  no_sound = 0;
  currentVol = vol;
}

function volIcon(el){
  if(no_sound != 0){
    el.src = "helpers/player/sound.svg";
    document.getElementById("volume-bar").value = currentVol;
    document.getElementById('volumenumber').innerText = currentVol;
    no_sound = 0;
    return;
  }

  el.src = "helpers/player/no-sound.svg";
  document.getElementById("volume-bar").value = 0;
  document.getElementById('volumenumber').innerText = 0;
  no_sound = 1;
}

var pin_player = true;
function selectpin(){
  if(pin_player === true){
    pin_player = false;
  }
  else{
    pin_player = true;
  }
}