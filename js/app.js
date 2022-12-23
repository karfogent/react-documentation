const opacityOfNav = document.querySelector("nav")
let scrollPrev = 0;
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
const buttonDown = document.getElementById("button-down")
buttonDown.onclick = function() {
    window.scrollBy(0,300);
}
window.addEventListener('scroll', function() {
    let scroll = window.pageYOffset || document.documentElement.scrollTop ||
                  document.body.scrollTop || 0;
    buttonDown.style.opacity = Math.max(0, Math.min(1, -scroll / 150 + 2));
  });