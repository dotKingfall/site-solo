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

//Show volume percentage
//AJEITAR ESSA DESGRAÇA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
function svp(to){
  var current = document.getElementById("volume-bar").value;
  var vn = document.getElementById("volume-image");

  vn.innerHTML = `<div width='20px' class='vln'>${current}</div>`;

  //to = setTimeout(() => {
  //  vn.innerHTML = '<img src="helpers/player/sound.svg" width="20px">';
  //}, 500);

  svpreturn(current);

  function svpreturn(n){
    vn.style.paddingLeft = "0px";
    vn.style.paddingRight = "0px";
    if(n < 10){
      vn.style.paddingLeft = "0px";
      vn.style.paddingRight = "0px";
    }
    else if(n < 100){}
    return;
  }
}