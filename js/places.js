const city = localStorage.getItem("selectedCity");

document.getElementById("cityTitle").innerText =
city + " - Public Places";

const places = {

    "Thiruvananthapuram":[

        "Central Railway Station",
        "Government Medical College",
        "KSRTC Bus Station",
        "Collectorate",
        "Taluk Office",
        "Corporation Office",
        "General Hospital"

    ],

    "Kochi":[

        "Ernakulam Junction",
        "General Hospital",
        "Metro Station",
        "Collectorate",
        "Taluk Office",
        "High Court",
        "KSRTC Bus Stand"

    ]

};

let allPlaces = places[city] || [];

const container =
document.getElementById("placesContainer");

function displayPlaces(list){

container.innerHTML="";

list.forEach(place=>{

let card=document.createElement("div");

card.className="place-card";

card.innerHTML=`

<h3>${place}</h3>

<p>Click to check accessibility.</p>

`;

card.addEventListener("click",()=>{

localStorage.setItem(
"selectedPlace",
place
);

window.location.href="place-details.html";

});

container.appendChild(card);

});

}

displayPlaces(allPlaces);

document.getElementById("searchInput")
.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let filtered=allPlaces.filter(place=>

place.toLowerCase().includes(value)

);

displayPlaces(filtered);

});