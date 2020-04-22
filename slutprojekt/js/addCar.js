var addBtn = document.getElementById("addContainer"),
addCarContainer = document.getElementById("addCarContainer"),
addCarContainer = document.getElementById("addCarContainer"),
blurredBG = document.getElementById("blurBG"),
closeAddCar = document.getElementById("addCarExit");

addBtn.onclick = () => {
    addCarContainer.style.top = 40 + "px";
    blurredBG.style.display = "block";
};

function hideAddCar() {
    addCarContainer.style.top = -450 + "px";
    setTimeout(() => { blurredBG.style.display = "none"; }, 500);
};

blurredBG.onclick = hideAddCar;
closeAddCar.onclick = hideAddCar;