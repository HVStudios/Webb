var audio = new Audio();
var defaultVolume = 0.05;
$("document").ready(function () {
    audio.src = "";

    audio.volume = defaultVolume;
    $("#VolumeRange").val(defaultVolume);

    $(document).on('input', '#VolumeRange', function() {
        audio.volume = $("#VolumeRange").val();
    });

    if (audio.paused) {
        $("#playButton").html("paused");
    } else {
        $("#playButton").html("playing");
    }

    audio.onpause = (() => {
        console.log("pause");
        $("#playButton").html("paused");
    });

    audio.onplay = (() => {
        console.log("play");
        $("#playButton").html("playing");
    });

    $("#playButton").click(() => {
        if (audio.src != "" && audio.src != null && audio.src.includes("Assets")) {
            if (audio.paused) {
                play();
            } else {
                pause();
            }
        }
    });
    $.ajax({
        url: "Assets/",
        success: (data) => {
            $(data).find("a:contains(.mp3)").each(function () {
                var title = $(this).attr("title");
                var listItem = new ListItem(title);
                $("#List").append(listItem);
            });
        }
    });
});

function newSong(title) {
    audio.src = `./Assets/${title}`;
    $("#Title").text(title);
    play();
}

function play() {
    audio.play();
}

function pause() {
    audio.pause();
}

class ListItem {
    constructor(title) {
        this.height = 50;
        this.element = $("<div></div>");
        this.element.addClass("ListItem");
        this.element.height(this.height);
        this.element.click(() => {
            newSong(title);
        });

        this.title = title;
        this.titleElement = $("<a></a>").text(title);
        this.titleElement.css("line-height", `${this.height}px`);

        this.element.append(this.titleElement);

        return this.element;
    }
}