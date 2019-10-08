function openMenu(name, title) {
    $("#contents").html("");
    $("#top").html("");
    $("#headline").html(title);


    for (i = 1; i <= 100; i++) {
        console.log(name);
        $("#contents").append('<div class="player"><audio src="sounds/mp3/' + name + i + '.mp3" preload download controls></audio></div> <div class="dl"><a href="sounds/mp3/' + name + i + '.mp3" download="' + title + i + '"><i class="fas fa-download"></i> ' + title + i + '.mp3</a></div>');
    }
}