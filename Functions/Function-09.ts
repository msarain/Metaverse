// Function Types
// Function types are frequently used to describe callback parameters (parameters
//    meant to be called as functions).

var nothingInGivesString: () => string;

var inputAndOutput: (songs: string[], count?: number) => number;

var songs2 = ["Juice", "Shake It Off", "What's Up"];

//function defined as parameter
function runOnSongs(songAt: (index: number) => string) {
    for (let i = 0; i < songs2.length; i += 1) {
        console.log(getSongAt(i));
    }
}

function getSongAt(index: number) {
    return `${songs2[index]}`;
}
runOnSongs(getSongAt); // Ok

function logSong(song: string) {
    return `${song}`;
}
// runOnSongs(logSong);

// Error: Argument of type '(song: string) => string' is not
// assignable to parameter of type '(index: number) => string'.
// Types of parameters 'song' and 'index' are incompatible.
// Type 'number' is not assignable to type 'string'.