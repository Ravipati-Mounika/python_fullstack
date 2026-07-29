alert("Welcome to NRIT Learning Management System")
let heading = document.getElementById("welcome");
heading.innerHTML="Welcome Future Software Engineers"
console.log("Heading element:",heading)
let msg=document.getElementById("message");
msg.innerHTML="Javascript is fun"
console.log("Message element:",msg)
function showmessage(){
    alert("Welcome to NRIT Learning Management System")
}
function changeheading(){
    document.getElementById("welcome").innerHTML="Welcome python Fullstack Developers"
}
let heading1=document.querySelector("#welcome");
console.log("Heding element:",heading)
let button=document.getElementById("btnGreeting")
button.addEventListener("click",function(){
    alert("Welcome to javascript Event Handling");
});
let registerForm=document.getElementById("registerForm");
registerForm.addEventListener("submit",
function(event){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    if(!name||!email||!password){
        alert("please fill in all ields.");
        return;
    }
    alert("Registration Successful!");
});