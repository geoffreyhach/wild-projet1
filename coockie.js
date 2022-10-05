//coockie

const buttonOk = document.querySelector(".btn-ok");

buttonOk.addEventListener("click", () => {
    console.log("test btn ok");
    window.open("cookie.gif", "Cookie", "width=650px,height=250px");

});

const buttonPasOk = document.querySelector(".btn-pas-ok");
const popupCoockie = document.querySelector(".coockie");

buttonPasOk.addEventListener("click", () => {
    popupCoockie.classList.toggle("active");;
});