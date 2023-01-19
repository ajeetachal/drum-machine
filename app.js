function display(value){
  document.getElementById('display').value=value;
}
function play(str){
  var audio = document.getElementById(str);
  audio.play();
  audio.volume = document.getElementById("control").value;
}
function keyPress(evt){ 
  if (evt.keyCode == 81)
  {
    document.getElementById("Q").click();
  }
  else if (evt.keyCode == 87)
  {
    document.getElementById("W").click();
  }
  else if (evt.keyCode == 69)
  {
    document.getElementById("E").click();
  }
  else if (evt.keyCode == 65)
  {
    document.getElementById("A").click();
  }
  else if (evt.keyCode == 83)
  {
    document.getElementById("S").click();
  }
  else if (evt.keyCode == 68)
  {
    document.getElementById("D").click();
  }
  else if (evt.keyCode == 90)
  {
    document.getElementById("Z").click();
  }
  else if (evt.keyCode == 88)
  {
    document.getElementById("X").click();
  }
  else if (evt.keyCode == 67)
  {
    document.getElementById("C").click();
  }
}
document.addEventListener("keydown", keyPress);