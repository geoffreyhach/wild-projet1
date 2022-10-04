//Mobile navbar
const navBar = document.querySelector("nav");
const toggleButton = document.querySelector(".navbartoggle");

toggleButton.addEventListener("click", function () {
    navBar.classList.toggle("active");
});
// Accueil 

const enterAccueil = document.querySelector(".enter");
const pageEnter = document.querySelector(".pageAccueil");
enterAccueil.addEventListener("click", function(){
    pageEnter.classList.add("cache");
});
// Pop'up de Pub

const listePub = ["pub1.png", "Pub3"]
//Preparation des pub aléatoire
//const indexAl = Math.floor(Math.random() * (10 - 0 +1)) + 0;
//console.log(indexAl);

    window.onload = (event) => {
        console.log('La page est complètement chargée');
        window.open(listePub[0], "Pub Codesand'wich", "left=50%,top=50%,width=800px,height=250px");
  };