//nav experience

const btn1 = document.querySelector(".date1");
const btn2 = document.querySelector(".date2");
const btn3 = document.querySelector(".date3");
const btn4 = document.querySelector(".date4");
const btn5 = document.querySelector(".date5");
const btn6 = document.querySelector(".date6");

const textEmplacement = document.querySelector(".text--experience");
const textDate = [
    ["<h1>CREATION DU SITE MARMITTON<h1></br><p> Marmiton.org a été créé en 1983 par Hubert Bonisseur de La Bath, comme moyen de partager gratuitement des idées de recettes. Il pu alors partager ca recette de blanquette de veau avec le monde entier.</p> "],
    ["<h1>ENTREPRISE DE POULET<h1></br><p>Creation d'une entreprise spcecialisé dans le poulet domestique. </br></br>1989 l'entreprise est le premier producteur mondial de volailles certifiées. (Poulet et dinde).</br></br> 1990 L'entreprise entre en bourse. </p> "],
    ["<h1>CREATION D'UN VACCIN<h1></br><p> Chercheur à ces heures perdu, Hubert Bonisseur de La Bath crea un vaccin pour lutter contre les allergies aux poils de poulet. </br></br> 1993 100% des personnes vacciné ont des symptomes secondaires divers grave. </br></br> 1994 Hubert est condamné à 10 ans de prison ferme, pour usage de faux.</p> "],
    ["<h1>PREMIER FILM<h1></br><p> OSS 117: Bons Baisers d'Afrique</p> "],
    ["<h1>DEUXIEME FILM<h1></br><p>OSS 117 : Le Caire, nid d'espions </p> "],
    ["<h1>TROISIEME FILM<h1></br><p>OSS 117 : Rio ne répond plus</p> "]
];

btn1.addEventListener("click", () => {
    textEmplacement.innerHTML = textDate[0];
});

btn2.addEventListener("click", () => {
    textEmplacement.innerHTML = textDate[1];
});

btn3.addEventListener("click", () => {
    textEmplacement.innerHTML = textDate[2];
});

btn4.addEventListener("click", () => {
    textEmplacement.innerHTML = textDate[3];
});

btn5.addEventListener("click", () => {
    textEmplacement.innerHTML = textDate[4];
});

btn6.addEventListener("click", () => {
    textEmplacement.innerHTML = textDate[5];
});

//toggle mobile

const navDate = document.querySelector(".ul--experience");
const defilButton = document.querySelector(".date--experience");
const textGrand = document.querySelector(".main--experience");

defilButton.addEventListener("click", function () {
    navDate.classList.toggle("active");
    textGrand.classList.toggle("active");
});



