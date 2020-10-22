var randomnumber1 = Math.floor((Math.random()*6)+1);
var pictures1 =[randomnumber1];
document.querySelector(".img1").setAttribute('src', 'images/dice' + pictures1 + '.png');
var randomnumber2 = Math.floor((Math.random()*6)+1);
var pictures2 =[randomnumber2];
document.querySelector(".img2").setAttribute('src', 'images/dice' + pictures2 + '.png');

if(randomnumber1 > randomnumber2){
document.querySelector("h1").innerHTML=("Player one win!");
}
else if(randomnumber1 === randomnumber2){
  document.querySelector("h1").innerHTML=("Draw!");
}
else{
  document.querySelector("h1").innerHTML=("Player two win!");
}

function refreshPage(){
    window.location.reload();
}
