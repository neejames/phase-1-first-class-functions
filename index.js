function receivesAFunction(callback) {
    callback();
}
receivesAFunction(Spy);

function returnsANamedFunction() {
    return (returnsANamedFunction);
}

function returnsAnAnonymousFunction() {
    return (function () {});
}