

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
