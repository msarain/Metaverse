/* 
Rest Parameters  ... spread operator may be placed on the last parameter in a function declaration
to indicate any “rest” arguments passed to the function starting at that parameter
should all be stored in a single array

 */
function singAllTheSongs(singer: string, ...songs: string[]) {
    for (const song of songs) {
        console.log(`${song}, by ${singer}`);
    }
}

singAllTheSongs("Alicia Keys"); // Ok
singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face"); // Ok

//singAllTheSongs("Ella Fitzgerald", 2000); // Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.