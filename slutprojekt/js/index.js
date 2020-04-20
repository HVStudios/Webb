function setProperty(propertyName, value) {
    document.documentElement.style.setProperty(propertyName, value);
}

function resize() {
    setProperty("--fullHeight", window.innerHeight.toString()+"px");
}

window.addEventListener("resize", resize);

// Math.round((new Date()).getTime() / -1000)