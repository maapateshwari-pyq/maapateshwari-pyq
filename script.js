/* ================= POPUP ================= */

function openPopup(){
    document.getElementById("popup").style.display="flex";
}

function closePopup(){
    document.getElementById("popup").style.display="none";
}

document.addEventListener("click", function(e){

    const popup = document.getElementById("popup");

    // Close popup outside
    if(popup && e.target === popup){
        popup.style.display="none";
    }

    // ================= HAMBURGER =================
    if(e.target.closest(".menu-toggle")){
        document.querySelector(".navbar ul")?.classList.toggle("active");
        return;
    }

    // Close menu outside
    if(!e.target.closest(".navbar")){
        document.querySelector(".navbar ul")?.classList.remove("active");
    }

    // ================= MOBILE ACCORDION =================
    if(e.target.classList.contains("dropdown-toggle") && window.innerWidth <= 992){

        e.preventDefault();

        const parent = e.target.parentElement;

        document.querySelectorAll(".gov-dropdown").forEach(drop => {
            if(drop !== parent){
                drop.classList.remove("active");
            }
        });

        parent.classList.toggle("active");
    }

});
function goBack(){
    window.history.back();
}
