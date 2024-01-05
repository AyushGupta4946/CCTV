const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar")
const link = document.querySelector(".link")
const menuBtnIcon = document.querySelector(".fa-solid")
const themeBtn = document.querySelector(".theme__button")

hamburger.addEventListener("click", (e) => {
    navbar.classList.toggle("open")

    const isOPen = navbar.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOPen ? "fa-solid fa-close" : "fa-solid fa-bars")
})

navbar.addEventListener("click", (e) => {
    navbar.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars")
})

// theme toggler

themeBtn.addEventListener('click', (e) => {
    const body = document.body;

    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // Check if 'dark-mode' is applied, and set the appropriate text on the button
    const isDarkMode = body.classList.contains('dark-mode');
    const buttonText = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';

    // Update the button text
    // document.querySelector('button').textContent = buttonText;
})
