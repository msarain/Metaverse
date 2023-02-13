// More Return Types

function logSongNew2(song: string | undefined): void {
    if (!song) {
        return; // Ok
    }
    console.log(`${song}`);
    // return true;     // Error: Type 'boolean' is not assignable to type 'void'.
}

logSongNew2("I Want to Flex");

let songLogger: (song: string) => void;
songLogger = (song) => {
    console.log(`${song}`);
};
songLogger("Heart of Glass"); // Ok

function returnsVoid() {
    return;
}
let lazyValue: string | undefined;

//lazyValue = returnsVoid();
// Error: Type  'void' is not assignable to type 'string | undefined'.


const records: string[] = [];   
function saveRecords(newRecords: string[]) {    //return type is undefined here
    //newRecords.forEach(record => records.push(record)); 
    //Although push return an index but ForEch return void
    
    newRecords.forEach(record => {
        var index = records.push(record);   //Here we can get the index also 
        console.log(`Record \"${record} has been saved at location ${index}...`);
    }); 


}
saveRecords(['21', 'Come On Over', 'The Bodyguard'])

