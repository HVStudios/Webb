function setProperty(propertyName, value) {
    document.documentElement.style.setProperty(propertyName, value);
}

function resize() {
    setProperty("--fullHeight", window.innerHeight.toString()+"px");
}

function yeeter() {
    var yeet = document.querySelector(".logo");
    var yeeted = document.querySelector(".navbarContainer");
    var yeet2 = document.querySelector(".logoContainer");

    if (window.matchMedia('(min-width: 585px)').matches == true) {
    yeeted.appendChild(yeet);
    } else if (window.matchMedia('(min-width: 585px)').matches == false) {
        yeet2.appendChild(yeet);
    }
}

var random = Math.floor(Math.random() * 4);

function luckyPage() {
    if (random == 0) {
        location.href = "http://itgwebb.se/klass/webb2_g2/henrik/nummerhittare/";
    } else if (random == 1) {
        location.href = "http://itgwebb.se/klass/webb2_g2/henrik/ordhittare/";
    } else if (random == 2) {
        location.href = "http://itgwebb.se/klass/webb2_g2/henrik/bildflyttare/index.html";
    } else if (random == 3) {
        location.href = "http://itgwebb.se/klass/webb2_g2/henrik/formular/index.html";
    }
}

function alignLogo() {
    if (window.matchMedia('(max-width: 585px)').matches == true) {
        document.querySelector(".logo").style.marginLeft = window.innerWidth / 2 - document.querySelector(".logo").offsetWidth / 2 + "px";
    }
}

window.addEventListener("resize", resize);
window.addEventListener("resize", yeeter);
window.addEventListener("load", yeeter);
window.addEventListener("load", alignLogo);
window.addEventListener("resize", alignLogo);
document.querySelector(".headerButton").addEventListener("click", luckyPage);