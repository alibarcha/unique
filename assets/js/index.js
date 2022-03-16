// navbar sticky js

const stickyMenu = () => {
    const navbar = document.getElementById("navbar")
    const navbarHeight = navbar.offsetHeight
    if (window.scrollY > 250) {
        document.body.style.paddingTop = `${navbarHeight}px`
        navbar.classList.add("sticky-menu")
    } else {
        navbar.classList.remove("sticky-menu")
        document.body.style.paddingTop = 0
    }
}

window.addEventListener('scroll', stickyMenu);


