// Return Types

// Type: (songs: string[]) => number
function singSongs(songs: string[]) {
    for (const song of songs) {
        console.log(`${song}`);
    }
    return songs.length;
}

// Type: (songs: string[], index: number) => string | undefined
function getSongAt(songs: string[], index: number) {
    return index < songs.length
        ? songs[index]
        : undefined;
}

var songs = ["Bad Romance", "Just Dance", "Poker Face"];

console.log(getSongAt(songs,1));
console.log();
singSongs(songs);
