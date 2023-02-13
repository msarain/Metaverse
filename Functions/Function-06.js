/*
Rest Parameters  ... spread operator may be placed on the last parameter in a function declaration
to indicate any “rest” arguments passed to the function starting at that parameter
should all be stored in a single array

 */
function singAllTheSongs(singer) {
    var songs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        songs[_i - 1] = arguments[_i];
    }
    for (var _a = 0, songs_1 = songs; _a < songs_1.length; _a++) {
        var song = songs_1[_a];
        console.log("".concat(song, ", by ").concat(singer));
    }
}
singAllTheSongs("Alicia Keys"); // Ok
singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face"); // Ok
//singAllTheSongs("Ella Fitzgerald", 2000); // Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.
