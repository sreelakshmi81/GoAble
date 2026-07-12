document.addEventListener("DOMContentLoaded", () => {

    const user = JSON.parse(localStorage.getItem("GoAbleUser"));

    if(!user){
        window.location.href = "login.html";
        return;
    }

    document.getElementById("name").textContent = user.name || "-";
    document.getElementById("email").textContent = user.email || "-";
    document.getElementById("age").textContent = user.age || "-";
    document.getElementById("gender").textContent = user.gender || "-";
    document.getElementById("medical").textContent = user.medicalCondition || "None";

    if(user.disabilities){
        document.getElementById("disabilities").textContent =
        user.disabilities.join(", ");
    }

    const details=document.getElementById("dynamicDetails");

    let html="<h3>Disability Details</h3>";

    if(user.mobilityType){
        html+=`
        <p><strong>Mobility:</strong> ${user.mobilityType}</p>
        `;
    }

    if(user.hearingType){
        html+=`
        <p><strong>Hearing:</strong> ${user.hearingType}</p>
        `;
    }

    if(user.speechType){
        html+=`
        <p><strong>Speech:</strong> ${user.speechType}</p>
        `;
    }

    details.innerHTML=html;

});