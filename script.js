// ===============================
// Typing Animation
// ===============================

const words = [
    "Full Stack Developer",
    "AWS Cloud Engineer",
    "Java Developer",
    "Python Developer",
    "Backend Developer",
    "Final Year CSE Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;
const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex > current.length) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex < 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


// ===============================
// Progress Bar
// ===============================

window.addEventListener("scroll",()=>{

    const scrollTop =
    document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop/height)*100;

    const bar=document.getElementById("progressBar");

    if(bar){
        bar.style.width=progress+"%";
    }

});


// ===============================
// Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


// ===============================
// Back To Top
// ===============================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(!topBtn) return;

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

}


// ===============================
// Contact Form Validation
// ===============================

const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}


// ===============================
// Mobile Menu
// ===============================

const menu=document.querySelector(".menu");
const nav=document.querySelector(".nav-links");

if(menu && nav){

menu.addEventListener("click",()=>{

if(nav.style.display==="flex"){

nav.style.display="none";

}else{

nav.style.display="flex";
nav.style.flexDirection="column";
nav.style.position="absolute";
nav.style.top="70px";
nav.style.right="20px";
nav.style.background="#0f172a";
nav.style.padding="20px";
nav.style.borderRadius="15px";

}

});

}


// ===============================
// Navbar Shadow
// ===============================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.style.boxShadow="0 5px 20px rgba(0,0,0,.35)";

}else{

navbar.style.boxShadow="none";

}

});