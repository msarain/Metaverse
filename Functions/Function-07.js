// Return Types
// Type: (songs: string[]) => number
function singSongs(songs) {
    for (var _i = 0, songs_1 = songs; _i < songs_1.length; _i++) {
        var song = songs_1[_i];
        console.log("".concat(song));
    }
    return songs.length;
}
// Type: (songs: string[], index: number) => string | undefined
function getSongAt(songs, index) {
    return index < songs.length
        ? songs[index]
        : undefined;
}
var songs = ["Bad Romance", "Just Dance", "Poker Face"];
console.log(getSongAt(songs, 1));
console.log();
singSongs(songs);
