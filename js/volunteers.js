const city = localStorage.getItem("selectedCity");
const place = localStorage.getItem("selectedPlace");

const user = JSON.parse(localStorage.getItem("GoAbleUser"));

const disability = user.disabilities[0];

document.getElementById("city").innerText = city;
document.getElementById("place").innerText = place;
document.getElementById("disability").innerText = disability;

const container = document.getElementById("volunteerContainer");

fetch("data/volunteer.json")

.then(response => response.json())

.then(data => {

    const volunteers = data[city][place];

    const filtered = volunteers.filter(volunteer =>

        volunteer.specialization === disability

    );

    if(filtered.length === 0){

        container.innerHTML = `

        <h2>No volunteers available for this disability at this location.</h2>

        `;

        return;

    }

    filtered.forEach(volunteer => {

        const card = document.createElement("div");

        card.className = "volunteer-card";

        card.innerHTML = `

            <h2>${volunteer.name}</h2>

            <p><strong>Specialization:</strong> ${volunteer.specialization}</p>

            <p><strong>Experience:</strong> ${volunteer.experience}</p>

            <p><strong>Rating:</strong> ⭐ ${volunteer.rating}</p>

            <p><strong>Languages:</strong> ${volunteer.languages.join(", ")}</p>

            <p><strong>Availability:</strong> ${volunteer.availability}</p>

            <button class="view-btn">

                View Profile

            </button>

        `;

        card.querySelector(".view-btn")

        .addEventListener("click", () => {

            localStorage.setItem(

                "selectedVolunteer",

                JSON.stringify(volunteer)

            );

            window.location.href =

            "volunteer-profile.html";

        });

        container.appendChild(card);

    });

})

.catch(error => {

    console.error(error);

    container.innerHTML =

    "<h2>Unable to load volunteers.</h2>";

});