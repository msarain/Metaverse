// Function Overloads

function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;

function createDate(monthNo: number, day: number, year: number, monthName: string): Date;

function createDate(monthOrTimestamp: number, day?: number, year?: number, monthName?: string) {
    return day === undefined || year === undefined
        ? new Date(monthOrTimestamp)
        : new Date(year, monthOrTimestamp, day);
}

createDate(554356800); // Ok
createDate(7, 27, 1987); // Ok

//createDate(4, 1);
// Error: No overload expects 2 arguments, but overloads
// do exist that expect either 1 or 3 arguments.

//Call-Signature Compatibility

function format(data: string): string; // Ok
function format(data: string, needle: string, haystack: string): string; // Ok

//function format(getData: () => string): string;
// This overload signature is not compatible with its implementation signature.

function format(data: string, needle?: string, haystack?: string) {
    return needle && haystack ? data.replace(needle, haystack) : data;
}