/*=========================================
        D_WORLD SCRIPT.JS
=========================================*/

// ===============================
// Mobile Navigation Toggle
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// ===============================
// Close Mobile Menu
// ===============================

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// Scroll To Top
// ===============================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.style.display = "flex";

    }else{

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Hide initially

scrollBtn.style.display = "none";

// ===============================
// Header Shadow
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.12)";

    }else{

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.06)";

    }

});

// ===============================
// Newsletter Form
// ===============================

const newsletter = document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

const email =
newsletter.querySelector("input").value;

if(email===""){

alert("Please enter your email.");

return;

}

alert("🎉 Thank you for subscribing!");

newsletter.reset();

});

}

// ===============================
// Search Box
// ===============================

const searchInput =
document.querySelector(".search-box input");

const productCards =
document.querySelectorAll(".product-card");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value =
searchInput.value.toLowerCase();

productCards.forEach(card=>{

const title =
card.querySelector("h3").innerText.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// ===============================
// Hero Fade Animation
// ===============================

const hero =
document.querySelector(".hero");

window.addEventListener("load",()=>{

hero.style.opacity="1";

hero.style.transform="translateY(0)";

});

// ===============================
// Product Hover Effect
// ===============================

document.querySelectorAll(".product-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

// ===============================
// Add to Cart
// ===============================

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});



// ===============================
// Console Message
// ===============================

console.log("✅ D_World Website Loaded Successfully");