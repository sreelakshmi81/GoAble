const city = localStorage.getItem("selectedCity");
const place = localStorage.getItem("selectedPlace");

const user =
JSON.parse(localStorage.getItem("GoAbleUser"));

document.getElementById("city").innerText = city;

document.getElementById("place").innerText = place;

document.getElementById("disability").innerText =
user.disabilities.join(", ");

document
.getElementById("yesBtn")
.addEventListener("click",function(){

window.location.href =
"volunteer-list.html";

});

document
.getElementById("noBtn")
.addEventListener("click",function(){

window.location.href =
"dashboard.html";

});