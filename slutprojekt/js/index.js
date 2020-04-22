function setProperty(propertyName, value) {
    document.documentElement.style.setProperty(propertyName, value);
}

function resize() {
    setProperty("--fullHeight", window.innerHeight.toString()+"px");
}

document.body.onload = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user == null) {
            // console.log(user.email);
            
            document.getElementById("add").style.display = "none";
            document.getElementById("addContainer").style.display = "none";

            var loginBtn = document.createElement("a");

            document.getElementById("titlebar").appendChild(loginBtn);
            loginBtn.innerHTML = "Log in";
            loginBtn.classList.add("loginBtn");
            loginBtn.href = "../login"
        } else {
            // console.log(user.email);
        }
    })};

window.addEventListener("resize", resize);

// Math.round((new Date()).getTime() / -1000);