const disabilityBoxes =
document.querySelectorAll(".disability");


const questionContainer =
document.getElementById("dynamicQuestions");



disabilityBoxes.forEach(box=>{


box.addEventListener(
"change",
generateQuestions
);


});




function generateQuestions(){


questionContainer.innerHTML="";



let selected=[];



disabilityBoxes.forEach(box=>{


if(box.checked){

selected.push(box.value);

}


});




selected.forEach(type=>{


let html="";



// MOBILITY QUESTIONS

if(type==="Mobility Disability"){


html+=`

<div class="question-box">

<h3>Mobility Disability Details</h3>


<label>
Do you use wheelchair?
</label>

<select id="wheelchair">

<option>Yes</option>

<option>No</option>

</select>




<label>
Do you use prosthetic support?
</label>


<select id="prosthetic">


<option>Yes</option>

<option>No</option>


</select>




<label>
Mobility equipment used
</label>


<select id="mobilityEquipment">


<option>Wheelchair</option>

<option>Crutches</option>

<option>Walker</option>

<option>Prosthetic Leg/Arm</option>

<option>Other</option>


</select>




<label>
Do you require ramp assistance?
</label>


<select>


<option>Yes</option>

<option>No</option>


</select>


</div>

`;

}





// HEARING QUESTIONS

if(type==="Hearing Disability"){


html+=`

<div class="question-box">


<h3>Hearing Disability Details</h3>



<label>
Do you use a hearing device?
</label>


<select>

<option>Yes</option>

<option>No</option>


</select>



<label>
Type of hearing device
</label>


<select>


<option>Hearing Aid</option>

<option>Cochlear Implant</option>

<option>Other</option>


</select>




<label>
Need sign language assistance?
</label>


<select>


<option>Yes</option>

<option>No</option>


</select>


</div>

`;

}





// SPEECH QUESTIONS


if(type==="Speech Disability"){


html+=`

<div class="question-box">


<h3>Speech Disability Details</h3>



<label>
Type of speech difficulty
</label>


<select>


<option>Stuttering</option>

<option>Non-verbal / Mute</option>

<option>Difficulty speaking clearly</option>

<option>Other</option>


</select>




<label>
Need communication assistance?
</label>


<select>


<option>Yes</option>

<option>No</option>


</select>



</div>

`;

}




questionContainer.innerHTML+=html;



});


}







document
.getElementById("registerForm")
.addEventListener(
"submit",
function(event){



event.preventDefault();



let user={


name:
document.getElementById("name").value,


email:
document.getElementById("email").value,


age:
document.getElementById("age").value,


gender:
document.getElementById("gender").value,


phone:
document.getElementById("phone").value,


disabilities:[]

};





disabilityBoxes.forEach(box=>{


if(box.checked){


user.disabilities.push(box.value);


}


});






localStorage.setItem(

"GoAbleUser",

JSON.stringify(user)

);





alert(
"Registration Successful!"
);




window.location.href=
"dashboard.html";



});