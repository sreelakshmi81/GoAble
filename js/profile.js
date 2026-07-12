document.addEventListener("DOMContentLoaded", () => {

    const user = JSON.parse(localStorage.getItem("GoAbleUser"));

    if (!user) {
        alert("Please login first.");
        window.location.href = "login.html";
        return;
    }

    // Personal Information
    document.getElementById("name").textContent = user.name || "-";
    document.getElementById("email").textContent = user.email || "-";
    document.getElementById("age").textContent = user.age || "-";
    document.getElementById("gender").textContent = user.gender || "-";
    document.getElementById("medical").textContent =
        user.medicalCondition || "None";

    // Welcome message
    document.getElementById("welcomeName").textContent =
        "Welcome, " + (user.name || "User") + "!";

    // Avatar (first letter of name)
    const avatar = document.getElementById("avatar");

    if (user.name && user.name.length > 0) {
        avatar.textContent = user.name.charAt(0).toUpperCase();
    } else {
        avatar.textContent = "G";
    }

    // Disability Badges
    const disabilityContainer = document.getElementById("disabilities");
    disabilityContainer.innerHTML = "";

    if (user.disabilities && user.disabilities.length > 0) {

        user.disabilities.forEach(disability => {

            const badge = document.createElement("span");

            badge.className = "badge";

            badge.textContent = disability;

            disabilityContainer.appendChild(badge);

        });

    } else {

        disabilityContainer.innerHTML =
            "<span class='badge'>No Disability Selected</span>";

    }

    // Dynamic Disability Details
    const details = document.getElementById("dynamicDetails");

    let html = "";

    if (user.mobilityType) {
        html += `
            <p>
                <strong>Mobility Support:</strong>
                ${user.mobilityType}
            </p>
        `;
    }

    if (user.hearingType) {
        html += `
            <p>
                <strong>Hearing Support:</strong>
                ${user.hearingType}
            </p>
        `;
    }

    if (user.speechType) {
        html += `
            <p>
                <strong>Speech Condition:</strong>
                ${user.speechType}
            </p>
        `;
    }

    if (user.medicalCondition) {
        html += `
            <p>
                <strong>Medical Condition:</strong>
                ${user.medicalCondition}
            </p>
        `;
    }

    if (html === "") {

        html = `
            <p>
                No additional disability information available.
            </p>
        `;

    }

    details.innerHTML = html;

});