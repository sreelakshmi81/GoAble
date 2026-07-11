const loginForm =
document.getElementById("loginForm");



loginForm.addEventListener(
"submit",
function(event){


event.preventDefault();



let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



// Get registered user

let storedUser =
localStorage.getItem("GoAbleUser");



if(!storedUser){


alert(
"No account found. Please register first."
);


return;


}



let user =
JSON.parse(storedUser);



// Check email

if(user.email === email){



// Since password will be added later
// this is a prototype login


localStorage.setItem(
"loggedInUser",
JSON.stringify(user)
);



alert(
"Login successful!"
);



window.location.href=
"dashboard.html";



}

else{


alert(
"Incorrect email or account does not exist."
);


}



});