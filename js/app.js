const opacityOfNav = document.querySelector("nav")

window.addEventListener("scroll", function () {
    if (scrollY > 10) {
        opacityOfNav.classList.add("NoOpacity")
        opacityOfNav.classList.remove("YeOpacity")
    } else {
        opacityOfNav.classList.remove("NoOpacity")
        opacityOfNav.classList.add("YeOpacity")
    }
})