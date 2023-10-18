import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// Firebase configuration (replace with your own config)
const firebaseConfig = {
    apiKey: "AIzaSyCKmxo4iJZACWsSHGfEGC9277Lqx16bx9s",
    authDomain: "signup-demo-75ec2.firebaseapp.com",
    databaseURL: "https://signup-demo-75ec2-default-rtdb.firebaseio.com",
    projectId: "signup-demo-75ec2",
    storageBucket: "signup-demo-75ec2.appspot.com",
    messagingSenderId: "115777525228",
    appId: "1:115777525228:web:5dd7f8c695fe601c36dcc9",
    measurementId: "G-8MLNLX0ZJ0"
  };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

let firstname = document.getElementById("checkout-firstname");
let lastname = document.getElementById("checkout-lastname");
var phonenumber = document.getElementById("checkout-phone");
var companyname = document.getElementById("checkout-company");
var gst = document.getElementById("checkout-gst");
var address = document.getElementById("checkout-address");
var countryname = document.getElementById("checkout-country");
var statename = document.getElementById("checkout-state");
var postalcode = document.getElementById("checkout-postal");

// Get a reference to the Firebase database
const database = getDatabase(firebaseApp);

// Reference to the "users" node in the database (you can change this to your desired path)
const usersRef = ref(database, 'users');

// Add a click event listener to the "Complete checkout" button
document.getElementById("checkout-button").addEventListener("click", function (e) {
    e.preventDefault();
    if (validateForm()) {
    var obj = {
        firstname: firstname.value,
        lastname: lastname.value,
        phonenumber: phonenumber.value,
        companyname: companyname.value,
        gst: gst.value,
        address: address.value,
        countryname: countryname.value,
        statename: statename.value,
        postalcode: postalcode.value,
    };

    // Push the user data to the database
    push(usersRef, obj)
        .then(() => {
            console.log("Data saved successfully");
            // You can add code here to handle success, like showing a success message to the user
        })
        .catch((error) => {
            console.error("Error saving data: ", error);
            // You can add code here to handle errors, like showing an error message to the user
        });
    }
});
function validateForm() {
    let valid = true;
    if (!firstname.value || !lastname.value || !phonenumber.value || !address.value || !countryname.value || !statename.value || !postalcode.value){
        alert("Please fill in required fields.");
        // return;
        valid = false;
    }
    else{
        valid = true;
        alert("check out is done");
    }
    return valid;
}

