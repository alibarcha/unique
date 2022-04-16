
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














