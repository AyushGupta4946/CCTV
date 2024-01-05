const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar")
const link = document.querySelector(".link")
const menuBtnIcon = document.querySelector(".fa-solid")
const themeBtn = document.querySelector(".theme__button")
const submitBtn = document.querySelector("#submit")
const body = document.body;
const readMore = document.querySelector("#read__more")

hamburger.addEventListener("click", (e) => {
    navbar.classList.toggle("open")

    const isOPen = navbar.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOPen ? "fa-solid fa-close" : "fa-solid fa-bars")
})

navbar.addEventListener("click", (e) => {
    navbar.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars")
})



function toggleTheme() {
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');


    const isDarkMode = body.classList.contains('dark-mode');


    // Save the theme preference to local storage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Event listener for theme button click
themeBtn.addEventListener('click', toggleTheme);

// Checking the local storage for theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
});

readMore.addEventListener('click', (e) => {
    e.preventDefault()
    var text = document.getElementById("read-more-text");

    if (text.style.webkitLineClamp === "2") {
        text.style.webkitLineClamp = "unset";
        readMore.textContent = "Read Less";
    } else {
        text.style.webkitLineClamp = "2";
        readMore.textContent = "Read More";
    }
})