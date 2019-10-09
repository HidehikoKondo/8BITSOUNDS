$(function () {
    $("#download").hide();
});

function openMenu(name, title) {
    $("#about").hide();
    $("#download").show();
    $("#download").html("");

    for (i = 1; i <= 100; i++) {
        $("#download").append('<div class="player"><audio src="sounds/mp3/' + name + i + '.mp3" preload download controls></audio></div> <div><a href="sounds/mp3/' + name + i + '.mp3" download="' + title + i + '"><i class="fas fa-download"></i> ' + title + i + '.mp3</a></div>');
    }
}