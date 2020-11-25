var italian= 0;
var rstchck = 0;
var tuna = 0;
var rstbf = 0;
var sbmlt = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;


function itl(){
  document.getElementById("img").style.backgroundImage = "url('https://www.subway.com.hk/wp-content/uploads/2017/09/Italian-BMT-1-3-450x450.png')";

italian = italian + 35;
count1 = count1 + 1;
document.getElementById("order-1").innerHTML = "Italian: Order x " + italian + " (" + count1 +")";
}

function rc(){
  document.getElementById("img").style.backgroundImage = "url(https://www.subway.com.hk/wp-content/uploads/2017/07/RC-450x450.png)";

rstchck = rstchck + 60;
count2 = count2 + 1;
document.getElementById("order-2").innerHTML = "Roasted CHicken: Order x " + rstchck  + " (" + count2 +")";
}

function tun(){
  document.getElementById("img").style.backgroundImage = "url('https://www.subway.com.hk/wp-content/uploads/2017/08/Tuna-450x450.png')";

tuna = tuna + 95;
count3 = count3 + 1;
document.getElementById("order-3").innerHTML = "Tuna : Order x " + tuna + " (" + count3 +")";
}

function rb(){
  document.getElementById("img").style.backgroundImage = "url('https://www.subway.com.hk/wp-content/uploads/2017/07/RB-450x450.png')";

rstbf = rstbf + 50;
count4 = count4 + 1;
document.getElementById("order-4").innerHTML = "Roasted Beef: Order x " + rstbf + " (" + count4 +")";
}

function sub(){
  document.getElementById("img").style.backgroundImage = "url('https://www.subway.com.hk/wp-content/uploads/2017/09/Subway-Melt-450x450.png')";

sbmlt = sbmlt + 30;
count5 = count5 + 1;
document.getElementById("order-5").innerHTML = "Subway Melt: Order x " + sbmlt + " (" + count5 +")";
}


function total(){
  var tot = italian + rstchck + tuna + rstbf + sbmlt;

  var tot2 = count1 + count2 + count3 + count4 + count5;

document.getElementById("order-tot").innerHTML= "Total: P" + tot + " (" + tot2 + ")";
}


function cancel(){
 var con = confirm("Do you want to cancel the order?");

if (con == true){
var italian= 0;
var rstchck = 0;
var tuna = 0;
var rstbf = 0;
var sbmlt = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
document.getElementById("order-1").innerHTML= "Italian B.M.T";
document.getElementById("order-2").innerHTML= "Roasted Chicken:";
document.getElementById("order-3").innerHTML= "Tuna:";
document.getElementById("order-4").innerHTML= "Roasted Beef:";
document.getElementById("order-5").innerHTML= "Subway MElt:";
document.getElementById("order-tot").innerHTML= "Total:";
document.getElementById("img").style.backgroundImage = "url('https://www.pngitem.com/pimgs/m/80-807139_mcdonalds-clipart-logo-mcdo-transparent-png-mcdonalds-logo.png')";
}

}
