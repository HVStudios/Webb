function setProperty(propertyName, value) {
    document.documentElement.style.setProperty(propertyName, value);
}

function resize() {
    setProperty("--fullHeight", window.innerHeight.toString()+"px");
}

window.onload = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user == null) {
            
            document.getElementById("add").style.display = "none";
            document.getElementById("addContainer").style.display = "none";

            var loginBtn = document.createElement("a");

            document.getElementById("titlebar").appendChild(loginBtn);
            loginBtn.innerHTML = "Log in";
            loginBtn.classList.add("loginBtn");
            loginBtn.href = "../login"
        }
    })};

window.addEventListener("resize", resize);