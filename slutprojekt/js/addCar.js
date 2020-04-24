/**@type {HTMLInputElement} */
let make;
/**@type {HTMLInputElement} */
let model;
/**@type {HTMLInputElement} */
let color;
/**@type {HTMLInputElement} */
let purchaseDate;

var addCar = document.getElementById("addContainer"),
checkmark = $(".checkmark"),
addCarContainer = document.getElementById("addCarContainer"),
blurredBG = document.getElementById("blurBG"),
closeAddCar = document.getElementById("addCarExit"),
addCarBtn = document.getElementById("addCarBtn"),
database = firebase.database();

addCar.onclick = () => {
    addCarContainer.style.top = 40 + "px";
    blurredBG.style.display = "block";
};

function hideAddCar() {
    addCarContainer.style.top = -450 + "px";
    setTimeout(() => { blurredBG.style.display = "none"; }, 500);
};

addCarBtn.onclick = () => {

    var date = Math.round((new Date()).getTime() / -1000),
    make = document.getElementById("addCarMake").value,
    model = document.getElementById("addCarModel").value,
    color = document.getElementById("addCarColor").value,
    purchaseDate = document.getElementById("addCarDate").value;
    var databaseEntry = {
        Make : make,
        Model : model,
        Color : color,
        Purchased : purchaseDate
    }

    // firebase.database().ref().child("Cars").child(date).set(databaseEntry);
    checkmark.toggle();
    document.getElementById("addedText").style.display = "block";
    setTimeout(() => { blurredBG.style.display = "none"; }, 1500);
    setTimeout(() => { document.getElementById("addedText").style.display = "none"; }, 900);
    setTimeout(() => { addCarContainer.style.top = -450 + "px"; }, 900);
    setTimeout(() => { checkmark.toggle(); }, 900);
};

blurredBG.onclick = hideAddCar;
closeAddCar.onclick = hideAddCar;