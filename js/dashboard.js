let userData =
localStorage.getItem("GoAbleUser");



if(userData){


let user =
JSON.parse(userData);



document.getElementById("userName")
.innerText =
user.name;


}



let cities = [

"Thiruvananthapuram",

"Kochi"

];



let citySelect =
document.getElementById("citySelect");



cities.forEach(city=>{


let option =
document.createElement("option");


option.value=city;

option.textContent=city;


citySelect.appendChild(option);


});




document
.getElementById("continueBtn")
.addEventListener(
"click",
()=>{


let selectedCity =
citySelect.value;



if(selectedCity===""){


alert(
"Please select a city"
);


return;


}



localStorage.setItem(
"selectedCity",
selectedCity
);



window.location.href=
"places.html";


});