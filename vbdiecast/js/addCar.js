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
    todaysDate = (new Date()).toISOString().substring(0, 10),
    database = firebase.database(),
    storageRef = firebase.storage().ref();

addCar.onclick = () => {
    addCarContainer.style.top = 40 + "px";
    blurredBG.style.display = "block";
    document.getElementById("addCarDate").value = todaysDate;
};

function hideAddCar() {
    addCarContainer.style.top = -450 + "px";
    setTimeout(() => {
        blurredBG.style.display = "none";
    }, 500);
};

async function addCarFunction() {
    
    document.getElementById("loadingContainer").style.display = "block";

    var date = Math.round((new Date()).getTime() / -1000).toString(),
        make = document.getElementById("addCarMake").value,
        model = document.getElementById("addCarModel").value,
        color = document.getElementById("addCarColor").value,
        purchaseDate = document.getElementById("addCarDate").value,
        carImg = document.getElementById("addCarImg").files[0];
    this.imageLink = await getImageLink(date, carImg);
    databaseEntry = {
        Make: make,
        Model: model,
        Color: color,
        Purchased: "Unknown",
        imageLink: this.imageLink
    };
    
    firebase.database().ref().child("Cars").child(date).set(databaseEntry);

    document.getElementById("loadingContainer").style.display = "none";
    checkmark.toggle();
    document.getElementById("addedText").style.display = "block";
    setTimeout(() => {
        document.getElementById("addedText").style.display = "none";
        addCarContainer.style.top = -450 + "px";
        checkmark.toggle();
    }, 900);
    setTimeout(() => {
        blurredBG.style.display = "none";
        document.getElementById("addCarMake").value = "";
        document.getElementById("addCarModel").value = "";
        document.getElementById("addCarColor").value = "";
        document.getElementById("addCarDate").value = "";
        document.getElementById("labelText").innerHTML = "Choose image";
        document.getElementById("labelImg").classList.remove("fa-check");
        document.getElementById("labelImg").classList.add("fa-upload");
    }, 1500);
};

async function getImageLink(date, carImg) {
    console.log(carImg);
    return await firebase.storage().ref().child(date).put(carImg)
        .then(async (snap) => await snap.ref.getDownloadURL().then((url) => url));
};

var i = 0;

firebase.database().ref().child("Cars").on("child_added", function (snapshot) {
    var car = snapshot.val();
    var htmlCode =
        `<div id="card">
            <img src="${car.imageLink}">
            <p><b>Make:</b> ${car.Make}</p>
            <p><b>Model:</b> ${car.Model}</p>
            <p><b>Color:</b> ${car.Color}</p>
            <p><b>Purchased:</b> ${car.Purchased}</p>
        </div>`;

    document.getElementById("carSection").innerHTML += htmlCode;

    i++;
    console.log(i);
});

function changeType() {
    document.getElementById("addCarDate").removeAttribute(disabled);
}

blurredBG.onclick = hideAddCar;
closeAddCar.onclick = hideAddCar;