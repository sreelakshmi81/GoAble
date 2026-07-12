document.addEventListener("DOMContentLoaded", () => {

    const volunteer = JSON.parse(localStorage.getItem("selectedVolunteer"));

    if (!volunteer) {
        alert("Volunteer information not found.");
        window.location.href = "volunteer-list.html";
        return;
    }

    // Avatar
    const avatar = document.getElementById("avatar");

    if (volunteer.name) {
        const initials = volunteer.name
            .split(" ")
            .map(word => word.charAt(0))
            .join("")
            .toUpperCase();

        avatar.textContent = initials;
    }

    // Header
    document.getElementById("volunteerName").textContent = volunteer.name;
    document.getElementById("specialization").textContent = volunteer.specialization;

    // Information
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