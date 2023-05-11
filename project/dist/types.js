"use strict";
// Types in Typescript are as follows 
//<==========PRIMITIVE TYPES ==========>
/**
 * number
 * string
 * boolean
 * null
 * undefined
 * symbol
 * Bigint
 * void
 */
//<==========Object Types ===============>
/**
 * Interface
 * Class
 * Enum
 * Arrays
 * Tuples
 */
// <====== Others ===========>
/**
 * any
 * object
 * unknown
 * never
 */
// Defining a String Type in TS 
let user_name = "Beau Iyere";
// Defining a Number Type in TS
let year = 2023;
// Defining a Boolean Type in TS
let isEnabled;
isEnabled = true;
// Defining an Array Type in TS
let guests = ["Beau Iyere", "Andre", "Ella"];
// Types for function
// let KillBill : (name: string) => string; <====== first way
const KillBill = function (name) {
    return name.toUpperCase();
};
const passBill = function (name) {
    console.log(name.toUpperCase());
};
let myname = "Beau Iyere";
console.log(typeof myname);
let myYear;
myYear = 2023;
myYear = "2023";
console.log(typeof myYear);
// let myGuest = ["Joe", "Jenny", "Dozie", 22, false];
let myGuest = ["test", 22, false];
console.log(typeof myGuest);
// Bigint
/* let a = 1234n; // Bigint
const b = 5678n // 5678n
var c = a + b;
console.log(c);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

let d = a < 12345 // returns a boolean
let f: bigint = 100n; // deining the f variable to only contain bigint values
let g: 100n = 100n; */ // deining the g variable to only contain the bigint value of 100n
// let h: bigint = 100 // this throws an error because 100 is an interget and not a bigint.
// Symbol 
let a1 = Symbol("a");
console.log(typeof a1);
let b1 = Symbol("b");
console.log(typeof b1);
var c1 = a1 === b1; // false 
console.log(c1);
// let d1 = a1 + "x"; // throws an error  
const d1 = Symbol("e");
console.log(typeof d1);
const f1 = Symbol("f"); // a variable whose type is a unique symbol must be prefixed with the const declaration
let h1 = d1 === d1;
console.log(h1);
console.log(typeof h1);
// let i = d1 === f1;
// ways to use types to describe an object in Typescript. The first is to declare a value as an object.
/* let a: object = {
  b: "X",
}; */ // throws an error property "b" does not exist on type object.
let a = {
    b: "X",
};
console.log(a.b);
console.log(typeof a);
let b = {
    c: {
        d: "f",
    },
};
// defining an object using type inference in TS
let c = {
    firstName: "Beau",
    lastName: "Iyere",
};
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let d = new Person("Itseme", "Iyere");
console.log(d);
console.log(typeof d);
// telling TS that something is optional
let e;
//using the readonly modifier
let user = { firstName: "Beau" };
// user.firstName = "Iyere";
