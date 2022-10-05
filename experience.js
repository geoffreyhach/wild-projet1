//nav experience

const btn1 = document.querySelector(".date1");
const btn2 = document.querySelector(".date2");
const btn3 = document.querySelector(".date3");
const btn4 = document.querySelector(".date4");
const btn5 = document.querySelector(".date5");
const btn6 = document.querySelector(".date6");

const textEmplacement = document.querySelector(".text--experience");
const textDate = [
    ["<h1>TEXT DATE 1<h1><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam repellat minus laudantium ducimus consectetur sit corporis maiores fugiat. Tenetur, facilis!</p> "],
    ["<h1>TEXT DATE 2<h1><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam repellat minus laudantium ducimus consectetur sit corporis maiores fugiat. Tenetur, facilis!</p> "],
    ["<h1>TEXT DATE 3<h1><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam repellat minus laudantium ducimus consectetur sit corporis maiores fugiat. Tenetur, facilis!</p> "],
    ["<h1>TEXT DATE 4<h1><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam repellat minus laudantium ducimus consectetur sit corporis maiores fugiat. Tenetur, facilis!</p> "],
    ["<h1>TEXT DATE 5<h1><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam repellat minus laudantium ducimus consectetur sit corporis maiores fugiat. Tenetur, facilis!</p> "],
    ["<h1>TEXT DATE 6<h1><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam repellat minus laudantium ducimus consectetur sit corporis maiores fugiat. Tenetur, facilis!</p> "]
];

btn1.addEventListener("click", () => {
    textEmplacement.innerHTML = textDate[0];
    navDate.classList.toggle("active");
});

btn2.addEventListener("click", () => {
    textEmplacement.innerHTML = textDate[1];
    navDate.classList.toggle("active");
});

btn3.addEventListener("click", () => {
    textEmplacement.innerHTML = textDate[2];
    navDate.classList.toggle("active");
});

btn4.addEventListener("click", () => {
    textEmplacement.innerHTML = textDate[3];
    navDate.classList.toggle("active");
});

btn5.addEventListener("click", () => {
    textEmplacement.innerHTML = textDate[4];
    navDate.classList.toggle("active");
});

btn6.addEventListener("click", () => {
    textEmplacement.innerHTML = textDate[5];
    navDate.classList.toggle("active");
});

//toggle mobile

const navDate = document.querySelector(".ul--experience");
const defilButton = document.querySelector(".date--experience");

defilButton.addEventListener("click", function () {
    navDate.classList.toggle("active");
});



