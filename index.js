var ran1=Math.floor(Math.random()*6)+1;
var ranImg1="dice"+ran1+".png";
var ranimgsrc1="images/"+ranImg1;
document.querySelectorAll("img")[0].setAttribute("src",ranimgsrc1);

var ran2=Math.floor(Math.random()*6)+1;
var ranImg2="dice"+ran2+".png";
var ranimgsrc2="images/"+ranImg2;
document.querySelectorAll("img")[1].setAttribute("src",ranimgsrc2);

// var ran2=Math.floor(Math.random()*6+1;
// var ranimgsrc2="images/dice"+ran2+".png";
// document.querySelectorAll("img")[1].setAttribute("src",ranimgsrc2);

if(ran1>ran2)
{
  document.querySelector("h1").innerHTML=("palyer1 wins🚩");
}
else if(ran1<ran2)
{
  document.querySelector("h1").innerHTML=("palyer2 wins🚩");
}
else
{
  document.querySelector("h1").innerHTML=("Draw");
}
