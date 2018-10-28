/*var img1 = 0;



document.getElementById("menu1").onmouseover=function(){
  var bashElt = document.createElement("img");console.log(img1);
  bashElt.id = "menu1";
  if( img1 == 1 ){bashElt.setAttribute("src","images/menu/menu_accueil.png");img1=0;}
  else{bashElt.setAttribute("src", "images/menu/menu_accueil_hover.png");img1=1;}
  document.getElementById("nav").replaceChild(bashElt, document.getElementById("menubidon1"));
}

document.getElementById("menu2").onmouseover=function(){
  var bashElt = document.createElement("img");
  bashElt.id = "menu2";
  bashElt.setAttribute("src", "images/menu/menu_club_hover.png");
  document.getElementById("nav").replaceChild(bashElt, document.getElementById("menu2"));
}

document.getElementById("menu3").onmouseover=function(){
  var bashElt = document.createElement("img");
  bashElt.id = "menu3";
  bashElt.setAttribute("src", "images/menu/menu_membres_hover.png");
  document.getElementById("nav").replaceChild(bashElt, document.getElementById("menu3"));
}

document.getElementById("menu4").onmouseover=function(){
  var bashElt = document.createElement("img");
  bashElt.id = "menu4";
  bashElt.setAttribute("src", "images/menu/menu_liens_hover.png");
  document.getElementById("nav").replaceChild(bashElt, document.getElementById("menu4"));
}

document.getElementById("menu5").onmouseover=function(){
  var bashElt = document.createElement("img");
  bashElt.id = "menu5";
  bashElt.setAttribute("src", "images/menu/menu_actualites_hover.png");
  document.getElementById("nav").replaceChild(bashElt, document.getElementById("menu5"));
}
*/

document.getElementById("lien1").onmouseover=function(){
  var bashElt = document.createElement("img");
  bashElt.id = "destination";
  bashElt.setAttribute("src", "images/liens/discord.png");
  document.getElementById("desti").replaceChild(bashElt, document.getElementById("destination"));
}

document.getElementById("lien2").onmouseover=function(){
  var bashElt = document.createElement("img");
  bashElt.id = "destination";
  bashElt.setAttribute("src", "images/liens/jeudego.png");
  document.getElementById("desti").replaceChild(bashElt, document.getElementById("destination"));
}

document.getElementById("lien3").onmouseover=function(){
  var bashElt = document.createElement("img");
  bashElt.id = "destination";
  bashElt.setAttribute("src", "images/liens/igowin.png");
  document.getElementById("desti").replaceChild(bashElt, document.getElementById("destination"));
}

document.getElementById("lien4").onmouseover=function(){
  var bashElt = document.createElement("img");
  bashElt.id = "destination";
  bashElt.setAttribute("src", "images/liens/goproblems.png");
  document.getElementById("desti").replaceChild(bashElt, document.getElementById("destination"));
}

document.getElementById("lien5").onmouseover=function(){
  var bashElt = document.createElement("img");
  bashElt.id = "destination";
  bashElt.setAttribute("src", "images/liens/ffg.png");
  document.getElementById("desti").replaceChild(bashElt, document.getElementById("destination"));
}

/*var pierreNoire = document.getElementById("pierreNoire");
var pierreBlanche = document.getElementById("pierreBlanche");
var vitesse = 1; // Valeur du déplacement en pixels

// Déplace le bloc sur sa gauche
function deplacerBloc() {

    var kBloc = parseFloat(getComputedStyle(pierreNoire).top);
    console.log(pierreNoire.textContent);
    var sBloc = parseFloat(getComputedStyle(pierreBlanche).top);

    pierreNoire.style.top = (kBloc + vitesse) + "px";
    pierreBlanche.style.top = (sBloc + vitesse) + "px";

}


setInterval(deplacerBloc, 100);*/
