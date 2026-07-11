const disabilityCheckboxes =
document.querySelectorAll(".disability");


const questionBox =
document.getElementById("dynamicQuestions");



disabilityCheckboxes.forEach(box => {


    box.addEventListener("change", showQuestions);


});



function showQuestions(){


    questionBox.innerHTML="";


    let selected=[];


    disabilityCheckboxes.forEach(item=>{


        if(item.checked){

            selected.push(item.value);

        }


    });



    selected.forEach(type=>{


        let html="";


        if(type==="Mobility Disability"){


            html += `

            <h3>Mobility Questions</h3>

            <label>
            Do you use wheelchair?
            </label>

            <select>
            <option>Yes</option>
            <option>No</option>
            </select>


            <label>
            Need ramp access?
            </label>

            <select>
            <option>Yes</option>
            <option>No</option>
            </select>

            `;


        }



        if(type==="Visual Disability"){


            html += `

            <h3>Visual Disability Questions</h3>

            <label>
            Need audio assistance?
            </label>

            <select>

            <option>Yes</option>
            <option>No</option>

            </select>

            `;


        }



        if(type==="Hearing Disability"){


            html += `

            <h3>Hearing Disability Questions</h3>

            <label>
            Need sign language assistance?
            </label>


            <select>

            <option>Yes</option>
            <option>No</option>

            </select>

            `;


        }



        if(type==="Prosthetic User"){


            html += `

            <h3>Prosthetic User Questions</h3>


            <label>
            Type of prosthetic support
            </label>


            <input 
            type="text"
            placeholder="Example: Leg prosthetic">

            `;


        }


        questionBox.innerHTML += html;


    });



}





document
.getElementById("registerForm")
.addEventListener("submit",function(e){


e.preventDefault();



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


disability:[]

};



disabilityCheckboxes.forEach(item=>{


if(item.checked){

user.disability.push(item.value);

}


});



localStorage.setItem(
"GoAbleUser",
JSON.stringify(user)
);



alert("Registration successful!");



window.location.href="dashboard.html";



});