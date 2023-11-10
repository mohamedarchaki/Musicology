const menu = document.getElementById("menu");
const actoins = document.getElementById("actoins");
menu.addEventListener("click", () => {
    hundleMenu();
});

function hundleMenu(){
    menu.classList.toggle("is-active")
    actoins.classList.toggle("is-active")
}