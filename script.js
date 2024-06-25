const doggo = document.getElementById("doggo");
const move = document.getElementsByClassName("doggo");
const box = document.getElementById("box");
let myAudio = document.querySelector("#audio");
let onOrOff = false;

doggo.addEventListener("click", () => {
    console.log("woof woof");
    myAudio.play();
    box.style.display = "block";
    if (onOrOff) {
        box.style.display = "none";
        onOrOff = false;
        return;
    }
    onOrOff = true;
});

doggo.addEventListener("dblclick", () => {
    console.log("db");
    doggo.classList.add("rotate");
    setTimeout(function () {
        doggo.classList.remove("rotate");
    }, 2000);
});

//grab elements
const menuElem = document.querySelector(".hamburger-menu");
const closeMenuElem = document.querySelector(".close-menu");
const navigationElem = document.querySelector(".nav-list");
const navigationLinks = document.querySelectorAll(".menu-link");
const mediaQuery = window.matchMedia("(min-width:46.8em)");

menuElem.addEventListener("click", () => {
    navigationElem.style.display = "block";
    closeMenuElem.style.display = "block";
    menuElem.style.display = "none";
});

closeMenuElem.addEventListener("click", () => {
    navigationElem.style.display = "none";
    menuElem.style.display = "block";
    closeMenuElem.style.display = "none";
});

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (mediaQuery.matches) {
            navigationElem.style.display = "block";
            closeMenuElem.style.display = "block";
            navigationLinks.forEach((a) => {
                a.classList.remove("active");
            });
            link.classList.add("active");
        } else {
            navigationElem.style.display = "none";
            menuElem.style.display = "block";
            closeMenuElem.style.display = "none";
        }
    });
});
