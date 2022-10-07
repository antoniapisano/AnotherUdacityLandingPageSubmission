//This is used for the responsive hamburger menu//

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

// This has been used to build the navigation dynamically//



const listitem = document.querySelector( "nav" )
const listview = document.createElement( "ul" );
    listview.innerHTML = `
        <li><a href="#Home">Home</a></li>
        <li><a href="#Blog">Blog</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="Contact">Contact</a></li>`;
        listitem.append( listview );

//This has been used to build a subscription form with validation//

function validateForm(){
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;

if(name==""&&email==""){
    alert("Please enter your details to subscribe");
    return false;
}

else if(name==null||name==""){
    alert("Please enter your name");
    return false;
}

else if(email==null||email==""){
    alert("Please enter your email");
    return false;
}

else alert("Form successfully submitted. Thank you for subscribing!!!")
    return true;
}

regform.addEventListener('submit', (load) => {
    load.preventDefault();
});

//This has been used for smooth scrolling to the correct part of the page//

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth",
            block : "end"
        });
    });
});

//This has been used to highlight the active part of the scrolled menu//

const links = document.querySelectorAll("li");
const sec = document.querySelectorAll("section");

function activeMenu() {
    let len = sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    links.forEach(ltx => ltx.classList.remove("active"));
    links[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


