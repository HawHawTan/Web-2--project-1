const doggo = document.getElementById("doggo");
const move = document.getElementsByClassName("doggo");
const box = document.getElementById("box");
let onOrOff = false;

doggo.addEventListener("click", () => {
  console.log("woof woof");
  box.style.display = "block";
  if (onOrOff) {
    box.style.display = "none";
    onOrOff = false;
    console.log(onOrOff);
    return
  }
  onOrOff = true;
});

doggo.addEventListener("dblclick",()=>{
    console.log("db");
    doggo.classList.add("rotate");
    setTimeout(function() {
        doggo.classList.remove('rotate');
    }, 2000)
})