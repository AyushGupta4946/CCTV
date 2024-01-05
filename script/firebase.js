
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
    set(ref(db, 'user/' + document.getElementById("name").value), {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    });
    alert("Message sent successfully")
})
