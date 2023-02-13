// Function Type Parentheses

// Type is a function that returns a union: string | undefined
let returnsStringOrUndefined: () => string | undefined;

// Type is either undefined or a function that returns a string
let maybeReturnsString: (() => string) | undefined;


//Parameter Type Inferences
//The singer type will be a function that takes one parameter as string and will return string
let singer: (song: string) => string; 

singer = function (song) {
    // Type of song: string
    return `Singing: ${song.toUpperCase()}!`; // Ok
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
newSongs.forEach((song, index) => {
    console.log(`${newSongs} is at index ${index}`);
});