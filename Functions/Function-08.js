// Explicit Return Types
function singSongsRecursive(songs, count) {
    if (count === void 0) { count = 0; }
    return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}
// Arrow/Lambda Functions
var singSongsRecursive2 = function (songs, count) {
    if (count === void 0) { count = 0; }
    return songs.length ? singSongsRecursive2(songs.slice(1), count + 1) : count;
};
//Incorrectly defined returned type
function getSongRecordingDate(song) {
    switch (song) {
        case "Strange Fruit":
            return new Date('April 20, 1939'); // Ok
        case "Greensleeves":
        //    return "unknown"; =>Incorrectly defined returned type
        // Error: Type 'string' is not assignable to type 'Date'.
        default:
            return undefined; // Ok
    }
}
var songs = ["Bad Romance", "Just Dance", "Poker Face"];
console.log(singSongsRecursive2(songs));
// console.log(songs.length);
// var songs2 = songs.slice(1);
// console.log(songs2);
// console.log(songs2.length);
// console.log(songs.length);
