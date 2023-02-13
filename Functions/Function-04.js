// Optional Parameters
function announceSong(song, singer) {
    if (singer) {
        console.log("Song: ".concat(song, ", Singer: ").concat(singer));
    }
    else {
        console.log("Song: ".concat(song));
    }
}
announceSong("Greensleeves"); // Ok
announceSong("Greensleeves", undefined); // Ok
announceSong("Chandelier", "Sia"); // Ok/*  */
function announceSongBy(song, singer) {
    if (singer) {
        console.log("Song: ".concat(song, " , Singer: ").concat(singer));
    }
    else {
        console.log("Song: ".concat(song));
    }
}
//announceSongBy("Greensleeves"); // Error: Expected 2 arguments, but got 1.
announceSongBy("Greensleeves", undefined); // Ok
announceSongBy("Chandelier", "Sia"); // Ok
