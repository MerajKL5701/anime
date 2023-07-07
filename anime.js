const bg = document.getElementsByClassName("bg")
const subHero = document.getElementsByClassName("sub-hero")
const nav = document.querySelector("nav")
const h1 = document.getElementsByClassName("HeroButton")
h1[1].style.opacity = "0"
let bgsupport = 0

setInterval(() => {
    BGherotranslatefor()
    if (bgsupport >= subHero.length - 1){
        bgsupport = 0
    }
},8000)
window.addEventListener("scroll",(() => {
    const subHeroHeight = parseInt(getComputedStyle(subHero[0]).height)
    console.log("scroll " + scrollY + " h" + subHeroHeight)
    if (scrollY > subHeroHeight){

        nav.classList.add("navbar")
    } else {
        nav.classList.remove("navbar")
    }
}))

// hero bg change 


function BGherotranslatefor() {
    console.log("bgsupoort " + bgsupport + "subhero " + subHero.length);
    if (bgsupport < subHero.length - 1) {
        bgsupport++;
    }
    if (bgsupport === subHero.length - 1) {
        h1[0].style.opacity = "0";
    } else {
        h1[0].style.opacity = "1";
        h1[1].style.opacity = "1";
    }
    bg[0].style.transform = `translate(${bgsupport * -50}%, 0%)`;
}
// he 
function BGherotranslateBac() {
    console.log("bgsupoort " + bgsupport + "subhero " + subHero.length);
    if (bgsupport > 0) {
        bgsupport--;
    }
    if (bgsupport === 0) {
        h1[1].style.opacity = "0";
    } else {
        h1[1].style.opacity = "1";
        h1[0].style.opacity = "1";
    }
    bg[0].style.transform = `translate(${bgsupport * -50}%, 0%)`;
}
