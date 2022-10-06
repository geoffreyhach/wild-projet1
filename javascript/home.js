//quotes API
const endPoint =
    " https://api.oss117quotes.xyz/v1/author/hubert/2";

const getQuote = async () => {
    let res = await fetch(endPoint);
    let quote = await res.json();
    displayQuote(quote[0].sentence);
}

const displayQuote = (quote) => {
    const quoteDiv = document.querySelector('.quote-para')
    quoteDiv.innerHTML = quote;

}

getQuote();


//modal email
const openBtn = document.querySelector(".cta-btn");
const dialog = document.querySelector("dialog");
//open modal
openBtn.addEventListener("click", () => {
    dialog.showModal();
});

//send email button
const sendBtn = document.querySelector("#send-email");
sendBtn.addEventListener("click", () => {
    dialog.innerHTML = `
    <div class="sent-container">
        <h2>Email envoyé !</h2>
        <button id="close-dial">Fermer</button>
    </div>
    `;
    const sendCloseBtn = document.querySelector("#close-dial");

    sendCloseBtn.addEventListener("click", () => {
        dialog.close();
    });
});

//close modal btn
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
    dialog.close();
});
// Pop'up de Pub

function Marketing(url, title, size) {
    this.url = url;
    this.title = title;
    this.size = size;
};

const pub1 = new Marketing("pub1.png", "Codesand'wich", "width=800px,height=250px");
const pub2 = new Marketing("pub2.png", "Istanbul", "width=700px,height=400px");
const pub3 = new Marketing("pub3.jpg", "Mal de Crâne", "width=600px,height=900px");
const pub4 = new Marketing("pub4.png", "Moi,j'suis dans le poulet",  "width=800px,height=250px");
const pub5 = new Marketing("pub5.png", "DEVENIR RICHE", "width=800px,height=250px");

const listePub = [pub1, pub2, pub3, pub4, pub5];

//Preparation des pub aléatoire
const index = Math.floor(Math.random() * (4 - 0 +1)) + 0;
console.log(index);
window.onload = (event) => {
    console.log('La page est complètement chargée');
    window.open(listePub[index].url, listePub[index].title, listePub[index].size);
};

