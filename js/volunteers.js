document.addEventListener("DOMContentLoaded", () => {

    const volunteerContainer = document.getElementById("volunteerContainer");

    const user = JSON.parse(localStorage.getItem("GoAbleUser"));

    if (!user) {
        volunteerContainer.innerHTML = "<h2>No user data found.</h2>";
        return;
    }

    let disability = "";

    if (user.disabilities && user.disabilities.length > 0) {
        disability = user.disabilities[0];
    }

    fetch("data/volunteers.json")
        .then(response => response.json())
        .then(data => {

            const volunteers = data.volunteers;

            const filteredVolunteers = volunteers.filter(volunteer =>
                volunteer.specialization === disability &&
                volunteer.availability === "Available"
            );

            if (filteredVolunteers.length === 0) {

                volunteerContainer.innerHTML = `
                    <div class="volunteer-card">
                        <h2>No Volunteers Found</h2>
                        <p>No volunteers are currently available for your disability type.</p>
                    </div>
                `;

                return;
            }

            volunteerContainer.innerHTML = "";

            filteredVolunteers.forEach(volunteer => {

                volunteerContainer.innerHTML += `
                    <div class="volunteer-card">

                        <h2>${volunteer.name}</h2>

                        <p><strong>Gender:</strong> ${volunteer.gender}</p>

                        <p><strong>Age:</strong> ${volunteer.age}</p>

                        <p><strong>Specialization:</strong> ${volunteer.specialization}</p>

                        <p><strong>Experience:</strong> ${volunteer.experience}</p>

                        <p><strong>Languages:</strong> ${volunteer.languages.join(", ")}</p>

                        <p><strong>Rating:</strong> ⭐ ${volunteer.rating}</p>

                        <p><strong>Status:</strong> ${volunteer.availability}</p>

                        <button onclick="viewProfile(${volunteer.id})">
                            View Profile
                        </button>

                    </div>
                `;

            });

        })

        .catch(error => {

            console.error(error);

            volunteerContainer.innerHTML = `
                <h2>Unable to load volunteer data.</h2>
            `;

        });

});


function viewProfile(id) {

    fetch("data/volunteers.json")

        .then(response => response.json())

        .then(data => {

            const volunteer = data.volunteers.find(v => v.id === id);

            localStorage.setItem(
                "selectedVolunteer",
                JSON.stringify(volunteer)
            );

            window.location.href = "volunteer-profile.html";

        });

}