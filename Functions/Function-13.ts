// Never Returns
// never is not the same as void. void is for a function that returns
// nothing. never is for a function that never returns. 

function fail(message: string): never {
    throw new Error(`Invariant failure: ${message}.`);
}
function workWithUnsafeParam(param: unknown) {
    if (typeof param !== "string") {
        fail(`param should be a string, not ${typeof param}`);
    }
    // Here, param is known to be type string
    param.toUpperCase(); // Ok
}