"use strict";
function calcTotalPrice(price) {
    return price + price * 0.18;
}
const priceOfToy = calcTotalPrice(100);
const discountedPrice = priceOfToy / 2;
console.log(discountedPrice);
const calTotalPrice = (price) => +(price + price * 0.18).toFixed(1);
const priceOfItem = calTotalPrice(1234);
const DP = priceOfItem / 2;
console.log(DP);
// Signature overloading Functions
// function processData(data: string): string;
// function processData(data: number): number;
function processData(data) {
    if (typeof data === "string")
        return `Processed: ${data}`;
    else if (typeof data === "number")
        return data * 2;
    else
        throw new Error("Invalid data type");
}
const actualprocesseddata = processData(100);
console.log(actualprocesseddata);
// Polymorphic or Generic Functions
function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
}
//Usage
let x = 10;
let y = 20;
console.log(swap(x, y));
let str1 = "Hello";
let str2 = "World";
console.log(swap(str1, str2));
