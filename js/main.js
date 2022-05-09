var currentTab = 0;

window.onload = function(){
  var hp = document.getElementsByClassName("tabOption")[0].children;
  hp[0].style.color = "rgb(191, 64, 191)";
  document.getElementsByClassName("tabOption")[0].style.fontSize = "2.1vmax";
  hp[1].style.width = '4em';
  gotoPage(0);
};

function gotoPage(pageid){
  var ws = document.getElementById("workablescreen");
  var tabs = document.getElementsByClassName("tabOption");
  var altabs = document.getElementsByClassName("compOption");

  ws.style.background = "rgb(30, 30, 30)";

  switch(pageid){
    case 1: //descobrir
      currentTab = 1;
      ws.innerHTML = "<object data='pages/descobrir/index.html' width='100%' height='100%'></object>";
      break;

    case 2: //você
      currentTab = 2;
      ws.innerHTML = "<object type='text/html' data='pages/voce/index.html' width='100%' height='100%'></object>";
      break;

    case 3: //sobre
      currentTab = 3;
      ws.innerHTML = "<object type='text/html' data='pages/sobre/index.html' width='100%' height='100%'></object>";
      break;

    case -1: //ajuda
      currentTab = 4;
      ws.innerHTML = "<object type='text/html' data='pages/ajuda/index.html' width='100%' height='100%'></object>";
      break;

    case -2: //login
      currentTab = 5;
      ws.innerHTML = "<object type='text/html' data='pages/auth/index.html' width='100%' height='100%'></object>";
      ws.style.background = "linear-gradient(90deg, rgb(191, 64, 191), rgb(87, 8, 97))";
      break;

    default: //homepage
      currentTab = 0;
      ws.innerHTML = "<object data='pages/inicial/index.html' width='100%' height='100%'></object>";
      break;
  }

  for(i = 0; i < tabs.length; i++){
    if(currentTab != i){
      tabs[i].children[1].style.width = "0";
      tabs[i].children[0].style.color = "white";
      tabs[i].style.fontSize = "1.8vmax";
    }
    else{
      tabs[i].style.fontSize = "2.1vmax";
    }
  }

  for(i = tabs.length; i < altabs.length+tabs.length; i++){
    if(currentTab != i){
      altabs[i-tabs.length].children[0].style.color = "white";
    }
    else{
      altabs[i-tabs.length].children[0].style.color = "rgb(191, 64, 191)";
    }
  }
}

function te(id, n, element, sz){
  var element = element.children;

  if(id != currentTab)
  {
    if(n == 1){
      element[0].style.transform = "rotateY(180deg) rotateY(180deg)";
      element[1].style.width = sz;
    }
    else{
      element[0].style.transform = "rotateY(-180deg) rotateY(180deg)";
      element[1].style.width = "0";
    }
  }
  else{
    element[0].style.transform = "rotateY(0deg) rotateY(0deg)";
    element[0].style.color = "rgb(191, 64, 191)";
  }
}

function ate(id, n, element){
  var element = element.children[0];

  if(id != currentTab)
  {
    if(n == 1)
      element.style.color = "rgb(191, 64, 191)";
    else
      element.style.color = "white";
  }
}