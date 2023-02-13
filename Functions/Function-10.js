// Function Type Parentheses
// Type is a function that returns a union: string | undefined
var returnsStringOrUndefined;
// Type is either undefined or a function that returns a string
var maybeReturnsString;
//Parameter Type Inferences
//The singer type will be a function that takes one parameter as string and will return string
var singer;
singer = function (song) {
    // Type of song: string
    return "Singing: ".concat(song.toUpperCase(), "!"); // Ok
};
/*
Functions passed as arguments to parameters with function parameter types will have
their parameter types inferred as well.
For example, the song and index parameters here are inferred by TypeScript to be
string and number, respectively:
 */
var newSongs = ["Call Me", "Jolene", "The Chain"];
// song: string
// index: number
newSongs.forEach(function (song, index) {
    console.log("".concat(newSongs, " is at index ").concat(index));
});
