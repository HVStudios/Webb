var bild1 = document.getElementById("bild1");
var bild2 = document.getElementById("bild2");
var bild3 = document.getElementById("bild3");

function flyttaBild() {
    var slump1 = Math.random();
    var slump2 = Math.random();
    var slump3 = Math.random();
    var slump4 = Math.random();
    var slump5 = Math.random();
    var slump6 = Math.random();
    var slump7 = Math.random();
    var slump8 = Math.random();
    var slump9 = Math.random();
    var slump10 = Math.random();
    var slump11 = Math.random();
    var slump12 = Math.random();
    bild1.style.left = slump1 * slump2 * 600 + "px";
    bild2.style.left = slump3 * slump4 * 600 + "px";
    bild3.style.left = slump5 * slump6 * 600 + "px";
    bild1.style.top = slump7 * slump8 * 600 + "px";
    bild2.style.top = slump9 * slump10 * 600 + "px";
    bild3.style.top = slump11 * slump12 * 600 + "px";

    // Ja, jag vet att koden är onödigt komplicerad
};