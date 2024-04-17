
const btn1 = document.getElementById("btn1");
const personal = document.getElementById("personal");
const name = document.getElementById("name");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const social = document.getElementById("social-security");
const contact = document.getElementById("contact");
const eContact = document.getElementById("emergency-contact");
const displayText = document.getElementById("displayText");
const textView = document.getElementById("textView");

function fun1() {
     displayText.innerHTML = name.value;
}

btn1.addEventListener('click', fun1);
