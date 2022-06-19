const opacityOfNav = document.querySelector("nav")
scrollPrev = 0;
window.addEventListener("scroll", function () {
    if (scrollY > 10 && scrollY > scrollPrev) {
        opacityOfNav.classList.add("NoOpacity")
        opacityOfNav.classList.remove("YeOpacity")
    } else {
        opacityOfNav.classList.remove("NoOpacity")
        opacityOfNav.classList.add("YeOpacity")
    }
    scrollPrev = this.scrollY
})
