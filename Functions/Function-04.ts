// Optional Parameters
function announceSong(song: string, singer?: string) {
    if (singer) {
        console.log(`Song: ${song}, Singer: ${singer}`);
    }else{
        console.log(`Song: ${song}`);
    }
}
announceSong("Greensleeves"); // Ok
announceSong("Greensleeves", undefined); // Ok
announceSong("Chandelier", "Sia"); // Ok/*  */

function announceSongBy(song: string, singer: string | undefined) {
    if (singer) {
        console.log(`Song: ${song} , Singer: ${singer}`);
    }else{
        console.log(`Song: ${song}`);
    }
}

//announceSongBy("Greensleeves"); // Error: Expected 2 arguments, but got 1.
announceSongBy("Greensleeves", undefined); // Ok
announceSongBy("Chandelier", "Sia"); // Ok

/* 
Any optional parameters for a function must be the last parameters. Placing an
optional parameter before a required parameter would trigger a TypeScript syntax
error: 
function announceSinger(singer?: string, song: string) {}*/
// Error: A required parameter cannot follow an optional parameter.