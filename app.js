      
       import {app} from "./config.js"


       import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
       const auth = getAuth(app);

       const signup = () => {
        console.log(auth);
        // let username = document.getElementById("username")
        let email = document.getElementById("email")
        let password = document.getElementById("password")
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((resolve) => {
                alert("Successfully Signup: " + resolve); // Concatenate the message and resolve
                window.location.href = "./index.html";
            })
            .catch((reject) => {
                alert("Signup failed: " + reject); // Concatenate the message and reject
            });
    }
    

       let signup_btn = document.getElementById("signup-btn")
       if(signup_btn){
signup_btn.addEventListener("click", signup)
       }
       else{
const login = () => {
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((resolve) => {
            // alert("successfully Login")
            // window.location.href = "./index.html"
            if (email.value === "ufarwa@gmail.com" && password.value ==="Ufarwa@123") {
                alert("Admin login successful");
                window.location.href = "./dashboard.html";
            } else {
                alert("User login successful");
                // Redirect users to their respective page
                window.location.href = "./userDashboard.html";
            }
        }).catch((reject) => {
            alert(reject)
        })
}

let login_btn = document.getElementById("login-btn")

login_btn.addEventListener("click", login)
       }