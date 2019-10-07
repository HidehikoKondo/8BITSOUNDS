function openMenu(name) {
    $("#contents").html("");

    for (i = 1; i <= 100; i++) {
        console.log(name);

        $("#contents").append('<div class="player"><audio src="sounds/mp3/' + name + i + '.mp3" preload controls></audio></div> <div class="dl"><a href="../../image/design/tagindex_mini.gif" download="sounds/mp3/Blip_Select10.mp3">' + name + i + 'mp3 ダウンロード</a></div>');


    }
}