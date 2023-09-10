import { getDatabase, ref, set,onValue, } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: "AIzaSyDIRDqvAFGLDDq1rn8O2Kbtzz0IXHhzgec",
  authDomain: "fir-practice-4f212.firebaseapp.com",
  databaseURL: "https://fir-practice-4f212-default-rtdb.firebaseio.com",
  projectId: "fir-practice-4f212",
  storageBucket: "fir-practice-4f212.appspot.com",
  messagingSenderId: "821567308477",
  appId: "1:821567308477:web:b0e775d529fcaf613dadd4",
  measurementId: "G-R0WYG9JCVN"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

var studentdetails = document.querySelectorAll("#StudentDetail form div div input")

const studentDetail = {}
const rollNumberInput = document.getElementById("rollNumber");
document.getElementById("submit").addEventListener("click", async (e) => {
  e.preventDefault(); // Prevent default form submission
  try {
    for (var i = 0; i < studentdetails.length; i++) {
      studentDetail[studentdetails[i].id] = studentdetails[i].value;
    }
    const userId = rollNumberInput.value;
    const usersObj = studentDetail;
    const usersReference = ref(database, "users/" + userId);
    await set(usersReference, usersObj);
    console.log("User created and data stored successfully!");
  } catch (error) {
    console.error("Error:", error);
  }
});
var crudData=document.getElementById("studentTable");
var tdCrud="";
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const usersReference = ref(database, "users/");
    onValue(usersReference, (data) => {

      const userData = data.val();
        for(var i=0;i<userData.length;)
      for (const userId in userData) {
        console.log(userId);
        const user = userData[userId];
        console.log("Keys:");
        for (const key in user) {
          console.log(key);
        }
        console.log("Values:");
        for (const key in user) {
          tdCrud+=`<td> ${user[key]}</td>`
        }
      }
      crudData.innerHTML=`<tr>${tdCrud}</tr>`
      console.log("Keys and values logged successfully!");
    });
  } catch (error) {
    console.error("Error:", error);
  }
});





     

