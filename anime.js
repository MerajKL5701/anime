const bg = document.getElementsByClassName("bg")
const subHero = document.getElementsByClassName("sub-hero")
const h1 = document.getElementsByClassName("HeroButton")
h1[1].style.opacity = "0"
let bgsupport = 0

setInterval(() => {
    BGherotranslatefor()
    if (bgsupport >= subHero.length - 1){
        bgsupport = 0
    }
},4000)



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
