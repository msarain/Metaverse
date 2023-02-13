// Function Parameters

function singAny(song) { //Any type of paramter is acceptable
    console.log(`Singing: ${song}!`);
}

function singString(song: string) {
    console.log(`Singing: ${song}!`);
}

/* Invalid function evern the function signature is different the name can never be same 
function singString(song: string, singer: string) {
    console.log(`Singing: ${song}!`);
} 
*/


singAny("National Anthum");
singAny({ song: "Hello World!" });

singString("National Anthum");
// singString({song:"Hello World!"});
