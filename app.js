//Mobile navbar
const navBar = document.querySelector("nav");
const toggleButton = document.querySelector(".navbartoggle");

toggleButton.addEventListener("click", function () {
    navBar.classList.toggle("active");
});

