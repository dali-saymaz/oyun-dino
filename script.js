let trex = document.querySelector("#trex")
let kaktus = document.querySelector("#kaktus")

function zipla() {
    if (kaktus.classList != "kaktus-animate") {
        kaktus.classList.add("kaktus-animate")
    }
    if (trex.classList != "trex-animate") {
        trex.classList.add("trex-animate")
        setTimeout(() => {
            trex.classList.remove("trex-animate")
        }, 500);
    }
}

var capismaKontrol = setInterval(() => {
    var trexBottom = parseInt(window.getComputedStyle(trex).getPropertyValue("bottom"))
    var kaktusLeft = parseInt(window.getComputedStyle(kaktus).getPropertyValue("left"))
    if (trexBottom<40 && kaktusLeft<40 && kaktusLeft>0) {
        kaktus.classList.remove("kaktus-animate");
        kaktus.style.display="none"
        alert("oyun bitti")    
    }
}, 10);