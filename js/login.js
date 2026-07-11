const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value.trim();

    let storedUser = localStorage.getItem("GoAbleUser");

    if (!storedUser) {
        alert("No registered account found. Please register first.");
        return;
    }

    let user = JSON.parse(storedUser);

    if (user.email.toLowerCase() === email.toLowerCase()) {

        localStorage.setItem("loggedInUser", JSON.stringify(user));

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Email not found. Please register first.");

    }

});