var audio = $('#sound')[0];
var songimg = $('#PlayingImg');
audio.volume = 0.1;
let intervalID;
let intervalID2;
const settings = {
    fill: '#5860FF',
    background: '#CACCFF'
}

const sliders = $('.duration_slider');

Array.prototype.forEach.call(sliders, (slider) => {

    slider.querySelector('input').addEventListener('input', (event) => {
        applyFill(event.target, false);
    });

    applyFill(slider.querySelector('input'), false);
});

function applyFill(slider, audiobool) {   
    var percentage = 100 * (slider.value - slider.min) / (slider.max - slider.min);
    var bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
    slider.style.background = bg;
    if (!audiobool) {
        audio.currentTime = slider.value - slider.min;
    }
}

$('.playbutton').on('click', function(myVolume) {

    if (audio.paused == false) {
        audio.pause();
        $('#playicon').attr('src', 'play.svg');
        $('#playicon').css('marginLeft', '1.6vh');
    } else {
        audio.play();
        $('#playicon').attr('src', 'pause.svg');
        $('#playicon').css('marginLeft', '1.4vh');
    }
});

audio.onpause = (() => {
    clearInterval(intervalID);
    if (audio.currentTime == audio.duration) {
        updateDuration();
    }
    clearInterval(intervalID2);
});

audio.onplay = (() => {
    var yeet = document.getElementById('YEET');
    intervalID = setInterval(updateDuration, 250);
    intervalID2 = setInterval(() => {
        applyFill(yeet, true);
    }, 250);
});

function updateDuration() {
    $('.duration_slider .range-slider__range').val(audio.currentTime);
}

function setVolume(e) {
    var slider = e.target || e;
    var volym = slider.value;
    audio.volume = volym;
    var percentage = 100 * (slider.value - slider.min) / (slider.max - slider.min);
    var bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
    slider.style.background = bg;
}

$('#SKRRT').on('change', setVolume);
$('#SKRRT').on('input', setVolume);

function colorChange() {
    // /**@type {HTMLImageElement}*/
    var songImg = $('#PlayingImg');
    var colorThief = new ColorThief();

    var img = new Image(1000, 1000);

    img.onload = (() => {
    });

    $('img').one('load', function() {
        colorChange();
    }).each(function () {
        if (this.complete) {
            img.src = songImg.attr('src');

            img.onload = () => {

                var color = colorThief.getColor(img, 1);

                $(songImg).css('box-shadow', '2px 7px 20px rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')');
            }
        }
    });
}

function niceDuration(seconds) {
    sec = Math.floor(seconds);
    min = Math.floor(sec / 60);
    min = min >= 10 ? min : min;
    sec = Math.floor(sec % 60);
    sec = sec >= 10 ? sec : '0' + sec;
    return min + ':' + sec;
}

function songDuration() {
    var duration = audio.duration;
    var currentDuration = audio.currentTime;
    var goodDuration = niceDuration(duration);
    var goodCurrent = niceDuration(currentDuration);
    $('#total_duration').html(goodDuration);
    $('#current_duration').html(goodCurrent);
    $('.range-slider__range').prop('max', audio.duration);
    $('.range-slider__range').prop('step', audio.duration / 500);
}

$(document).ready(function() {
    colorChange();
    niceDuration();
    setVolume(document.getElementById('SKRRT'));
});