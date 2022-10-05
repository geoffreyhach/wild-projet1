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


//coockie

const buttonOk = document.querySelector(".btn-ok");

buttonOk.addEventListener("click", function () {
    console.log("test");
});

console.log(buttonOk);