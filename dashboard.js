import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js"


import {
    getDatabase,
    set,
    ref,
    onValue, // onChildAdded, onChildRemoved, onChildChanged, on, get,
  } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
//   const auth = getAuth(app);
import { db } from "./config.js";

const auth = getAuth();
const database = getDatabase(db);
createUserWithEmailAndPassword(auth)
  .then((resolve) => {
        
        let userId = auth.currentUser.uid;
        console.log(userId);
        let usersReference = ref(database, "users/" + userId);
        let usersObj = {
            "studentName": document.getElementById('studentName').value,
            "fatherName": document.getElementById('fatherName').value,
            "RollNumber": document.getElementById('rollNumber').value,
            "CourseName": document.getElementById('courseName').value,
            "cnicNumber": document.getElementById('cnicNumber').value,
            "classTiming": document.getElementById('classTiming').value,
            "classSchedual": document.getElementById('classSchedual').value,
            "teacherName": document.getElementById('teacherName').value,
            "sectionName": document.getElementById('sectionName').value,
            "courseName": document.getElementById('courseName').value,
            "batch": document.getElementById('batch').value,
        };
        set(usersReference, usersObj);
      })