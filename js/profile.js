document.addEventListener("DOMContentLoaded", () => {

    const user = JSON.parse(localStorage.getItem("GoAbleUser"));

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    // Profile Information

    document.getElementById("name").textContent =
        user.name || "-";

    document.getElementById("email").textContent =
        user.email || "-";

    document.getElementById("age").textContent =
        user.age || "-";

    document.getElementById("gender").textContent =
        user.gender || "-";

    document.getElementById("medical").textContent =
        user.medicalCondition || "None";

    // Welcome Name

    document.getElementById("welcomeName").textContent =
        "Welcome, " + (user.name || "User");

    // Avatar

    const avatar = document.getElementById("avatar");

    if (user.name) {
        avatar.textContent =
            user.name.charAt(0).toUpperCase();
    }

    // Disability Badges

    const disabilityContainer =
        document.getElementById("disabilities");

    disabilityContainer.innerHTML = "";

    if (user.disabilities &&
        user.disabilities.length > 0) {

        user.disabilities.forEach(disability => {

            disabilityContainer.innerHTML += `
                <span class="badge">
                    ${disability}
                </span>
            `;

        });

    } else {

        disabilityContainer.innerHTML = `
            <span class="badge">
                No Disability Selected
            </span>
        `;
    }

    // Disability Details

    const details =
        document.getElementById("dynamicDetails");

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

    if (html === "") {
        html = `
            <p>
                No additional disability information available.
            </p>
        `;
    }

    details.innerHTML = html;

    // Volunteer Request History

    const history =
        JSON.parse(localStorage.getItem("volunteerHistory"))
        || [];

    const historyContainer =
        document.getElementById("volunteerHistory");

    if (history.length === 0) {

        historyContainer.innerHTML = `
            <div class="empty-history">
                No volunteer requests yet.
            </div>
        `;

    } else {

        historyContainer.innerHTML = "";

        history.forEach(volunteer => {

            historyContainer.innerHTML += `
                <div class="history-card">

                    <h3>${volunteer.name}</h3>

                    <p>
                        <strong>Specialization:</strong>
                        ${volunteer.specialization}
                    </p>

                    <p>
                        <strong>Phone:</strong>
                        ${volunteer.phone}
                    </p>

                    <p class="request-date">
                        Requested On:
                        ${volunteer.requestDate || "Recently"}
                    </p>

                    <span class="status">
                        Request Sent
                    </span>

                </div>
            `;

        });

    }

});