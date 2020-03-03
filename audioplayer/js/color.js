function colorChange() {
    var songImg = $("#PlayingImg");
    var colorThief = new ColorThief();

    $("img").one("load", function () {
        colorChange();
    }).each(function () {
        if (this.complete) {
            var cp = colorThief.getColor(songImg[0], 10);

            console.log(cp);

            $(songImg).css('background-color', 'rgb(' + cp[0] + ',' + cp[1] + ',' + cp[2] + ')');

        }
    });
}

$(document).ready(function () {
    colorChange();
});