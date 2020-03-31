

function countup(){

var companies = 375;
var requests = 132;
var percentage = Math.round(requests/companies*100);
var counter = null;

  var mask = document.getElementById("mask");
  var level = document.getElementById("level");
  var number = document.getElementById("number");
  var h = 0;
  counter = setInterval(function(){
      if(h == percentage){
        clearCounter();
      }else{
        h+=1;
        mask.style.height = h+"px";
        level.style.bottom = h + "px";
        number.innerHTML = h + "%";
      }   
  },30);
}

function clearCounter() {
    clearInterval(counter);
}

countup()

