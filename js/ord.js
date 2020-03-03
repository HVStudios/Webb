function inskrivning() {
var text = document.getElementById("text").value;
var ord = document.getElementById("ord").value;
var i = 0;

text.split(" ").forEach(element => {
    if (element == ord) {
        i++
    }
});
document.getElementById("utskrift").innerHTML = `Ordet "${ord}" förekommer ${i} gånger i texten`;
}