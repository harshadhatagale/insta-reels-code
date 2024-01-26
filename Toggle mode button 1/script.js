const toggle= document.getElementById("toggle");
const toggleBtn= document.querySelector(".toggleBtn");
const toggleIcon= document.querySelector("#toggleIcon");
const body= document.querySelector(".body");
toggle.addEventListener("change", function(){
    if (this.checked){
        toggleIcon.innerText= "dark_mode";
        toggleBtn.classList.toggle("dark");
        body.classList.toggle("dark");
    }
    else{
        toggleIcon.innerText= "light_mode";
        toggleBtn.classList.toggle("dark");
        body.classList.toggle("dark");
    }
})