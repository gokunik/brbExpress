// below code is for login and register modal

let modal = document.getElementById("modalBody");
let loginn = document.getElementsByTagName("template")[0].content.firstElementChild;
let registerr = document.getElementsByTagName("template")[1].content.firstElementChild;

function login() {
    modal.innerHTML = "";
    modal.appendChild(loginn);
}

function register() {
    modal.innerHTML = "";
    modal.appendChild(registerr);
}


// below code is for menu 
// on scroll menu will stick to the top
window.onscroll = function () { stickyHeader() };

var header = document.getElementById("header");
var infoHeader = document.getElementById("infoHeader");
var sticky = infoHeader.offsetHeight;


function stickyHeader() {

    if (window.pageYOffset > sticky) {
        header.classList.add("stickyNavbar");
        header.classList.add("scroll-on");
        infoHeader.style.marginBottom = header.offsetHeight + "px"


    } else {
        header.classList.remove("stickyNavbar");
        header.classList.remove("scroll-on");
        infoHeader.style.marginBottom = "0px"
    }
}
