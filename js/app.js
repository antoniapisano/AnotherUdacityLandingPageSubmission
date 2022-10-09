//This has been used to build navigation dynamically and in a NON STATIC MANNER
const navigationSection = document.querySelectorAll("[data-nav]");
let ul = document.getElementById("navbar__list");
navigationSection.forEach((section) => {
  const navText = section.getAttribute("data-nav");
  let li = document.createElement("li");
  li.setAttribute("id", navText);
  li.addEventListener("click", function () {
    section.scrollIntoView({ behavior: "smooth" });
  });
  let text = document.createTextNode(navText);
  li.appendChild(text);
  ul.appendChild(li);
});
//This gets the dimensions required for active scrolling
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight * 0.5 &&
    rect.bottom > window.innerHeight * 0.5
  );
}
// This gives the active scroll function
window.addEventListener("scroll", function () {
  const navList = document.querySelectorAll("li");
  //const sections = doucment.querySelectorAll("data-nav");
  navigationSection.forEach(function (elem) {
    const list = elem.classList;
    if (isInViewport(elem)) {
      list.add("your-active-class");
      navList.forEach((nav) => {
        if (nav.id === elem.dataset.nav) {
          nav.classList.add("active");
        } else {
          nav.classList.remove("active");
        }
      });
    } else {
      list.remove("your-active-class");
    }
  });
});
// This verifies the subscription form
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  if (name == "" && email == "") {
    alert("Please enter your details to subscribe");
    return false;
  } else if (name == null || name == "") {
    alert("Please enter your name");
    return false;
  } else if (email == null || email == "") {
    alert("Please enter your email");
    return false;
  } else alert("Form successfully submitted. Thank you for subscribing!!!");
  return true;
}
regform.addEventListener("submit", (load) => {
  load.preventDefault();
});
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
