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

function showtime(){
  //
}