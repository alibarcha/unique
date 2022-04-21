
(function() {
    const navbar = document.getElementById("navbar")
    const navbarHeight = navbar.offsetHeight
    document.getElementById("top-banner").style.paddingTop = `${navbarHeight}px`;
 
 })();
// navbar sticky js
const stickyMenu = () => {
    const navbar = document.getElementById("navbar")
    if (window.scrollY > 150) {
        navbar.classList.add("sticky-menu")
    } else {
        navbar.classList.remove("sticky-menu")
    }
}
window.addEventListener('scroll', stickyMenu);


// click to top button functionality

const clickbtn = () => {
    const clickBtn = document.getElementById("click-top")
    if (window.scrollY > 300) {
        clickBtn.classList.add("stick-click")
    } else {
        clickBtn.classList.remove("stick-click")
    }
}
window.addEventListener('scroll', clickbtn);


// ------ form valid and invali input javascript --------
// input name
let inputName=document.getElementById("inputName");
inputName.addEventListener("blur",validfun)
document.getElementById("validname").style="display:none "
function validfun() {
    if(inputName.value ===""){
        document.getElementById("validname").style="display:block;color:white;background:#dc3545; padding:1px 10px;display:inline "
    }
    
}

// input email
let inputemail=document.getElementById("inputemail");
inputemail.addEventListener("blur",validemail)
document.getElementById("validemail").style="display:none "
function validemail() {
    if(inputemail.value ===""){
        document.getElementById("validemail").style="display:block;color:white;background:#dc3545; padding:1px 10px;display:inline "
    }
    
}

// input phone
let inputphone=document.getElementById("inputphone");
inputphone.addEventListener("blur",validphone)
document.getElementById("validphone").style="display:none "
function validphone() {
    if(inputphone.value ===""){
        document.getElementById("validphone").style="display:block;color:white;background:#dc3545; padding:1px 10px;display:inline "
    }
    
}

// input phone
let inputtextarea=document.getElementById("inputtextarea");
inputtextarea.addEventListener("blur",validtextarea)
document.getElementById("validtextarea").style="display:none "
function validtextarea() {
    if(inputtextarea.value ===""){
        document.getElementById("validtextarea").style="display:block;color:white;background:#dc3545; padding:1px 10px;display:inline "
    }
    
}















