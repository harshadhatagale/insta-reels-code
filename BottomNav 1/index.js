window.onload= function (){
    showPage("home")
}
function showPage(pageId){
    document.querySelectorAll(".page").forEach(page=>{
    page.style.display="none"
    })
    document.getElementById(pageId).style.display="block";
    document.querySelectorAll(".BottomNav a").forEach(links=>{
        links.classList.remove("active");
    })
    document.querySelector(`.BottomNav a[href="#${pageId}"]`).classList.add("active")
}