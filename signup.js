import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const btn = document.getElementById("signup-btn");

btn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
});
