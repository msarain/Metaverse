// Function Type Aliases
var stringToNumber;
stringToNumber = function (input) { return input.length; }; // Ok
function usesNumberToString(numberToString) {
    console.log("The string is: ".concat(numberToString(1234)));
}
usesNumberToString(function (input) { return "".concat(input, "! Hooray!"); }); // Ok
//usesNumberToString((input) => input * 2);
// Error: Type 'number' is not assignable to type 'string'.
