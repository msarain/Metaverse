// Default Parameters
function rateSong(song, rating) {
    if (rating === void 0) { rating = 0; }
    console.log("".concat(song, " gets ").concat(rating, "/5 stars!"));
}
rateSong("Photograph"); // Ok
rateSong("Set Fire to the Rain", 5); // Ok
rateSong("Set Fire to the Rain", undefined); // Ok
//rateSong("At Last!", "100");    // Error: Argument of type '"100"' is not assignable
// to parameter of type 'number | undefined'. because of type string
