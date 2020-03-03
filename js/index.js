function setProperty(propertyName, value) {
    document.documentElement.style.setProperty(propertyName, value);
}

function resize() {
    setProperty("--fullHeight", window.innerHeight.toString()+"px");
}

var net = VANTA.NET({
    el: "#yeet",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 2.5,
    color: 0x00A9DE,
    backgroundColor: 0xFFFFFF
    })

function changeBG() {

    if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
        net.setOptions({
            backgroundColor: 0x23292D
        })
    } else {
        net.setOptions({
            backgroundColor: 0xFFFFFF    
        })
    }
}

function yeeter() {
    var yeet = document.querySelector(".logo");
    var yeeted = document.querySelector(".navbarContainer");
    var yeet2 = document.querySelector(".logoContainer")

    if (window.matchMedia('(min-width: 585px)').matches == true) {
    yeeted.appendChild(yeet);
    } else if (window.matchMedia('(min-width: 585px)').matches == false) {
        yeet2.appendChild(yeet);
    }
}

window.addEventListener("resize", resize);
window.addEventListener("resize", yeeter);
window.matchMedia('(prefers-color-scheme: dark)').addListener(changeBG);
window.addEventListener("load", changeBG);
window.addEventListener("load", yeeter);
window.onload(changeBG);