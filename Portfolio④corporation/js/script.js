const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menu-btn");
const links = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", function(){

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menuBtn.textContent = "×";
    }else{
        menuBtn.textContent = "☰";
    }

});

links.forEach(function(link){

    link.addEventListener("click", function(){

        nav.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});