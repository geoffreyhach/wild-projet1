//Mobile navbar
const navBar = document.querySelector("nav");
const toggleButton = document.querySelector(".navbartoggle");

toggleButton.addEventListener("click", function () {
    navBar.classList.toggle("active");
});


//Yann

const btn = document.querySelector(".date1");
const textEmplacement = document.querySelector(".text--experience");
const textDate = [
    ["text date 1"],
    ["text date 2"],
    ["text date 3"]
];

btn.addEventListener("click", () => {
    textEmplacement.innerHTML = textDate[0];
})
