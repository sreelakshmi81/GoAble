// Get selected place and registered user
const place = localStorage.getItem("selectedPlace");
const user = JSON.parse(localStorage.getItem("GoAbleUser"));

document.getElementById("placeName").innerText = place;

// Display user's disability
let disability = user.disabilities[0];
document.getElementById("userDisability").innerText =
"Profile: " + disability;

// Load accessibility data
fetch("data/accessibility-data.json")

.then(response => response.json())

.then(data => {

    const placeData = data[place];

    if (!placeData) {
        alert("Accessibility data not found.");
        return;
    }

    const availableFacilities = placeData.facilities;

    const availableList =
    document.getElementById("availableFacilities");

    const missingList =
    document.getElementById("missingFacilities");

    availableList.innerHTML = "";
    missingList.innerHTML = "";

    // Show available facilities
    availableFacilities.forEach(facility => {

        let li = document.createElement("li");

        li.innerHTML = "✅ " + facility;

        availableList.appendChild(li);

    });

    // Required facilities based on disability
    let requiredFacilities = [];

    if (disability === "Mobility Disability") {

        requiredFacilities = [

            "Ramp",
            "Smooth Pathway",
            "Accessible Toilet",
            "Elevator",
            "Reserved Parking",
            "Rest Area"

        ];

    }

    else if (disability === "Hearing Disability") {

        requiredFacilities = [

            "Visual Display Boards",
            "Written Instructions",
            "Help Desk",
            "Emergency Visual Alerts",
            "Digital Communication Kiosk"

        ];

    }

    else if (disability === "Speech Disability") {

        requiredFacilities = [

            "Help Desk",
            "Written Instructions",
            "Digital Communication Kiosk",
            "Visual Display Boards"

        ];

    }

    let score = 0;

    let marksPerFacility = 100 / requiredFacilities.length;

    requiredFacilities.forEach(facility => {

        if (availableFacilities.includes(facility)) {

            score += marksPerFacility;

        }

        else {

            let li = document.createElement("li");

            li.innerHTML = "❌ " + facility;

            missingList.appendChild(li);

        }

    });

    score = Math.round(score);

    document.getElementById("score").innerText =
    score + "%";

    const recommendation =
    document.getElementById("recommendation");

    if (score >= 90) {

        recommendation.innerHTML =
        "✅ This place is highly accessible for your needs. Volunteer assistance is optional.";

    }

    else if (score >= 70) {

        recommendation.innerHTML =
        "🟡 This place is moderately accessible. Some facilities are missing. A volunteer is recommended.";

    }

    else {

        recommendation.innerHTML =
        "🔴 Accessibility is limited for your needs. Requesting a volunteer is strongly recommended.";

    }

});

document
.getElementById("volunteerBtn")
.addEventListener("click", function () {

    window.location.href = "request-volunteer.html";

});