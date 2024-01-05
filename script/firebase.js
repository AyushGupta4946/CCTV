
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIv6LmEevqKVgC-g2U6FOlZZADsUPM8sM",
    authDomain: "cctv-1928d.firebaseapp.com",
    projectId: "cctv-1928d",
    storageBucket: "cctv-1928d.appspot.com",
    messagingSenderId: "769168795490",
    appId: "1:769168795490:web:2dde4838e84c36362f2e3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get ref to database services 
const db = getDatabase(app)

document.getElementById("submit").addEventListener('click', (e) => {
    e.preventDefault();
    var emailInput = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    if (!isValidEmail(emailInput)) {
        emailError.textContent = "Please enter a valid email address.";
        return;
    } else {
        emailError.textContent = "";
    }
    set(ref(db, 'user/' + document.getElementById("name").value), {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    });
    showModal()

})

// Function to validate email format
function isValidEmail(email) {
    // Use a simple regex to check for a valid email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "flex";
    setTimeout(function () {
        modal.style.display = "none";
    }, 2000);
}
