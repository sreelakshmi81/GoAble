const dropdown =
document.getElementById("cityDropdown");


fetch("data/cities.json")

.then(response=>response.json())

.then(cities=>{


dropdown.innerHTML="";



cities.forEach(city=>{


let option =
document.createElement("option");


option.value =
city.name;


option.textContent =
city.name;



dropdown.appendChild(option);



});


})

.catch(error=>{


console.log(
"Error loading cities",
error
);


dropdown.innerHTML=
"<option>Error loading data</option>";


});





document
.getElementById("cityButton")
.addEventListener(
"click",
()=>{


let selectedCity =
dropdown.value;



localStorage.setItem(
"selectedCity",
selectedCity
);



window.location.href=
"places.html";


});