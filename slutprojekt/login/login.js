/**@type {HTMLInputElement} */
let usr;
/**@type {HTMLInputElement} */
let psw;
/**@type {HTMLSpanElement} */
let forgotPassword;
/**@type {HTMLButtonElement} */
let loginButton;

window.onload = (e => {

  usr = document.getElementById("usrname");
  psw = document.getElementById("password");
  loginButton = document.getElementById("loginbtn");

  loginButton.onclick = (e => {

    let email = usr.value;
    let password = psw.value;

    console.log(firebase.auth().currentUser);

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(async () => {
      return firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            location.href = "../index.html";
          } else {
            console.log(user);
          }
        });
      }).catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
      });
    }).catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
    })
  });

  var database = firebase.database();

    database.ref().child("Manufacturer").on("value", snapshot => {
      console.log(snapshot.val())
    });

    firebase.database().ref().child("Manufacturer").child("Thing_2").set("Meow");

});

function setProperty(propertyName, value) {
  document.documentElement.style.setProperty(propertyName, value);
}

function resize() {
  setProperty("--fullHeight", window.innerHeight.toString()+"px");
}

window.addEventListener("resize", resize);