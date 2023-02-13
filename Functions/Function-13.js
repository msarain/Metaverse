// Never Returns
// never is not the same as void. void is for a function that returns
// nothing. never is for a function that never returns. 
function fail(message) {
    throw new Error("Invariant failure: ".concat(message, "."));
}
function workWithUnsafeParam(param) {
    if (typeof param !== "string") {
        fail("param should be a string, not ".concat(typeof param));
    }
    // Here, param is known to be type string
    param.toUpperCase(); // Ok
}
