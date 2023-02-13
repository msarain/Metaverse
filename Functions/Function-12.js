// More Return Types
function logSongNew2(song) {
    if (!song) {
        return; // Ok
    }
    console.log("".concat(song));
    // return true;     // Error: Type 'boolean' is not assignable to type 'void'.
}
logSongNew2("I Want to Flex");
var songLogger;
songLogger = function (song) {
    console.log("".concat(song));
};
songLogger("Heart of Glass"); // Ok
function returnsVoid() {
    return;
}
var lazyValue;
//lazyValue = returnsVoid();
// Error: Type  'void' is not assignable to type 'string | undefined'.
var records = [];
function saveRecords(newRecords) {
    //newRecords.forEach(record => records.push(record)); 
    //Although push return an index but ForEch return void
    newRecords.forEach(function (record) {
        var index = records.push(record); //Here we can get the index also 
        console.log("Record \"".concat(record, " has been saved at location ").concat(index, "..."));
    });
}
saveRecords(['21', 'Come On Over', 'The Bodyguard']);
