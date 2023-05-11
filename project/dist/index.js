"use strict";
let aA = [1, 3, 4]; // number
var bB = ["a", "b"]; // string
let cC = ["a", "b"]; // string of an array
let dD = [1, "d"]; // string or a number array
const eE = [2, "b"]; // string or a number array
let fF = ["red"];
fF.push("blue");
// f.push(true); // throws an error
// other ways of declaring arrays in TS
let fruits = ["Apple", "Watermelon", "Papaya"];
let course = ["maths", "English"];
// declaring a array with mixed types
const dsa = ["list", 23, true];
//or
let values = ["Apple", 2, "Orange", 3, 4, "Banana"];
// TUPLES
var empID = 1;
var empName = "Beau Iyere";
// Tuple type variable
var employee = [1, "Steve"];
// declare an array of tuple
var employee1;
employee1 = [
    [1, "Steve"],
    [2, "Bill"],
    [3, "Jeff"],
];
// Adding elements to a tuple
var employee = [1, "Steve"];
employee.push(2, "Bill");
console.log(employee); //Output: [1, 'Steve', 2, 'Bill']
// Tuples support optional elements too. Just like in object types, ? means “optional”:
// An array of train fares, which sometimes vary depending on direction
let trainFares = [[3.75], [8.25, 7.7], [10.5]];
// Equivalently:
let moreTrainFares = [
// ...
];
// Tuples also support rest elements, which you can use to type tuples with minimum lengths:
// A list of strings with at least 1 element
let friends = ["Sara", "Tali", "Chloe", "Claire"];
// A heterogeneous list
let list = [1, false, "a", "b", "c"];
// read only arrays and tuples
// readonly arrays
const numbers = [1, 2, 3, 4, 5, 6];
// readonly tuples
const person = ["Beau", 26];
// null, undefined, void & never
// function that returns a null value
function anull_value(X) {
    if (X < 10)
        return X;
    return null;
}
const nullValue = anull_value(91);
console.log(nullValue);
// funtion that returns an undefined value
const undefinedValue = () => undefined;
console.log(undefinedValue());
// function that returns a never value
/* function neverValue() {
  throw TypeError("I am always an error")
};

neverValue(); */
// (e) Another function that returns never
/* function nevervalue2() {
  while (true) {
    doSomething();
  }
}
nevervalue2(); */
var language;
(function (language) {
    language[language["English"] = 0] = "English";
    language[language["Spanish"] = 1] = "Spanish";
    language[language["Russian"] = 2] = "Russian";
})(language || (language = {}));
var language2;
(function (language2) {
    language2[language2["English"] = 0] = "English";
    language2[language2["Spanish"] = 1] = "Spanish";
    language2[language2["Russian"] = 2] = "Russian";
})(language2 || (language2 = {}));
// retrieving values from an enum
let myfirstLanguage = language.English;
let mySecondLanguage = language2["Russian"];
// spliting an enum so TS can merge them together
var Language3;
(function (Language3) {
    Language3[Language3["English"] = 1] = "English";
    Language3[Language3["Spanish"] = 2] = "Spanish";
})(Language3 || (Language3 = {}));
(function (Language3) {
    Language3[Language3["Russian"] = 3] = "Russian";
    Language3[Language3["Chinese"] = 4] = "Chinese";
})(Language3 || (Language3 = {}));
// mix string and number values
var Color;
(function (Color) {
    Color["Red"] = "#c10000";
    Color["Blue"] = "#007ac1";
    Color[Color["Pink"] = 12648528] = "Pink";
    Color[Color["White"] = 255] = "White";
})(Color || (Color = {}));
let red = Color.Red; // Color
let pink = Color.Pink; // Color
let colorD = Color[6]; // this is undefined but TS doesnt stop you so implicitly define it as a constant value
console.log(colorD);
// Accessing a constant enum key
let enum1 = 0 /* Language4["English"] */; //Language4
function flip(f) {
    return "flipped it";
}
console.log(flip(0 /* Flippable.Burger */)); // returns flipped it
console.log(flip(2 /* Flippable.Cup */)); // returns flipped it
// flip(12); // returns flipped it
var userName = "Beau Iyere";
console.log(userName);
var numberOfItems = 10;
console.log(numberOfItems);
