function checklogin(){
  username = document.getElementById("uid");
  password = document.getElementById("uid_pw");

  alert(`Usuário: ${username.value}\nSenha: ${password.value}`);
}

var animRunning = false;
function checkpw(){
  username = document.getElementById("newuid");
  password = document.getElementById("newpw");
  confirm_password = document.getElementById("cpw");
  msg = document.getElementById("cpwmessage");

  if(password.value === confirm_password.value)
  {
    if(password.value.length < 8) showMsg("Menos de 8 caracteres");
    else alert(`Usuário: ${username.value}\nSenha: ${password.value}\nConf_senha: ${confirm_password.value}`);
  }
  else showMsg("Senhas não iguais");

  function showMsg(msgtxt){
    if(animRunning == false){
      animRunning = true;
      msg.innerText = msgtxt;
      msg.style.opacity = "100%";
      msg.style.visibility = "visible";
      confirm_password.style.animationPlayState = "running";
      setTimeout(function(){confirm_password.style.animationPlayState = "paused";}, 200);
      setTimeout(function(){msg.style.opacity = "0"; msg.style.visibility = "hidden"; animRunning = false;}, 1500);
    }
  }
}

function createaccbutton(){
  document.getElementById("fst").style.display = "none";
  document.getElementById("scd").style.visibility = "visible";
}

var pwvis = false;
function pwvisibility(element, o){
  if(pwvis == false){
    if(o == 1) document.getElementById("uid_pw").type = "text";
    else document.getElementById("cpw").type = "text";
    element.src = "helpers/closed-eye.svg";
    element.style.transform = "scale(1.25) translateY(79%)";
    pwvis = true;
  }
  else{
    if(o == 1) document.getElementById("uid_pw").type = "password";
    else document.getElementById("cpw").type = "password";
    element.src = "helpers/open-eye.svg";
    element.style.transform = "scale(1.1) translateY(90%)";
    pwvis = false;
  }
}