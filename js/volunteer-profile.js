document.addEventListener("DOMContentLoaded", () => {

    const volunteer = JSON.parse(localStorage.getItem("selectedVolunteer"));

    if (!volunteer) {
        alert("Volunteer not found.");
        window.location.href = "volunteer-list.html";
        return;
    }

    const avatar = document.getElementById("avatar");

    const initials = volunteer.name
        .split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase();

    avatar.textContent = initials;

    document.getElementById("volunteerName").textContent = volunteer.name;
    document.getElementById("specialization").textContent = volunteer.specialization;

    document.getElementById("gender").textContent = volunteer.gender;
    document.getElementById("age").textContent = volunteer.age + " Years";
    document.getElementById("experience").textContent = volunteer.experience;
    document.getElementById("languages").textContent =
        volunteer.languages.join(", ");
    document.getElementById("phone").textContent = volunteer.phone;
    document.getElementById("availability").textContent =
        volunteer.availability;
    document.getElementById("rating").textContent =
        "⭐ " + volunteer.rating + " / 5";

});

function requestVolunteer(){

    const volunteer = JSON.parse(localStorage.getItem("selectedVolunteer"));

    alert(
        "Volunteer request sent successfully!\n\n" +
        "Volunteer: " + volunteer.name
    );

    window.location.href = "dashboard.html";

}