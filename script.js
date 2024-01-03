const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar")
const link = document.querySelector(".link")
const menuBtnIcon = document.querySelector(".fa-solid")


hamburger.addEventListener("click", (e) => {
    navbar.classList.toggle("open")

    const isOPen = navbar.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOPen ? "fa-solid fa-close" : "fa-solid fa-bars")
})

navbar.addEventListener("click", (e) => {
    navbar.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars")
})
