const place =
localStorage.getItem("selectedPlace");

document.getElementById("placeName").innerText =
place;

const facilities = {

"Central Railway Station":[

"✔ Wheelchair Ramp",

"✔ Accessible Toilet",

"✔ Smooth Pathway",

"✔ Elevator",

"✔ Reserved Parking",

"✔ Rest Area"

],

"Government Medical College":[

"✔ Wheelchair Ramp",

"✔ Accessible Toilet",

"✔ Elevator",

"✔ Lift with Braille Buttons",

"✔ Reserved Parking",

"✔ Volunteer Help Desk"

],

"KSRTC Bus Station":[

"✔ Ramp",

"✔ Reserved Seating",

"✔ Accessible Entrance",

"✔ Rest Area"

],

"Collectorate":[

"✔ Ramp",

"✔ Lift",

"✔ Accessible Washroom",

"✔ Wheelchair Path"

],

"Taluk Office":[

"✔ Ramp",

"✔ Accessible Entrance",

"✔ Help Desk"

],

"Corporation Office":[

"✔ Ramp",

"✔ Accessible Washroom",

"✔ Lift"

],

"General Hospital":[

"✔ Ramp",

"✔ Accessible Toilet",

"✔ Wheelchair Access",

"✔ Emergency Assistance"

],

"Ernakulam Junction":[

"✔ Ramp",

"✔ Lift",

"✔ Accessible Toilet",

"✔ Reserved Parking"

],

"Metro Station":[

"✔ Lift",

"✔ Escalator",

"✔ Accessible Entry",

"✔ Wheelchair Path"

],

"High Court":[

"✔ Ramp",

"✔ Elevator",

"✔ Accessible Washroom"

],

"KSRTC Bus Stand":[

"✔ Ramp",

"✔ Wheelchair Parking",

"✔ Accessible Waiting Area"

]

};

const list =
document.getElementById("facilityList");

const available =
facilities[place] || [];

available.forEach(item=>{

let li =
document.createElement("li");

li.textContent =
item;

list.appendChild(li);

});

document
.getElementById("scoreBtn")
.addEventListener("click",()=>{

window.location.href="result.html";

});