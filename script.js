const doggo = document.getElementById("doggo");
const box = document.getElementById("box");
let bark = document.querySelector("#audio");
let onOrOff = false;

doggo.addEventListener("click", () => {
    if (onOrOff) {
        onOrOff = false;
        // this was added
        doggo.classList.remove("scale");
        box.style.display = "none";
    }
    // this was added
    else {
        bark.play();
        // this was added
        doggo.classList.add("scale");
        box.style.display = "block";
        onOrOff = true;
    }
});

doggo.addEventListener("dblclick", () => {
    doggo.classList.add("rotate");
    setTimeout(function () {
        doggo.classList.remove("rotate");
    }, 1000);
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
