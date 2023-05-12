"use strict";
function addTwo(num) {
    return num + 2;
}
function signupUser(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) { }
// having a default value in a function
let loginUser = (name, email, isPaid = false) => { };
const getHello = (s) => {
    return "";
};
const heros = ["thor", "spiderman", "ironman"];
heros.map((hero) => {
    return `the hero is ${hero}`;
});
// A function that doesn't return anything ie VOID
function consoleError(errMsg) {
    console.log(errMsg);
}
// A function that never returns a value ie Never
const handleError = (errMsg) => {
    throw new Error(errMsg);
};
console.log(addTwo(5));
console.log(signupUser("hello"));
console.log(signUpUser("Beau Iyere", "beauspot@outlook.com", "testing", false));
console.log(loginUser("Beau Iyere", "beauspot@outlook.com"));
