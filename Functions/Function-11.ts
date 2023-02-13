// Function Type Aliases

type StringToNumber = (input: string) => number;

var stringToNumber: StringToNumber;

stringToNumber = (input) => input.length; // Ok

//stringToNumber = (input) => input.toUpperCase();//Wrong Return Type
// Error: Type 'string' is not assignable to type 'number'.

// function parameters can themselves be typed with aliases that happen to
// refer to a function type.
type NumberToString = (input: number) => string;

function usesNumberToString2(numberToString: NumberToString) {
    console.log(`The string is: ${numberToString(1234)}`);
}

usesNumberToString2((input) => `${input}! Hooray!`); // Ok

//usesNumberToString((input) => input * 2);
// Error: Type 'number' is not assignable to type 'string'.