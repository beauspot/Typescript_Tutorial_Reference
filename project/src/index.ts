let aA = [1, 3, 4]; // number
var bB = ["a", "b"]; // string
let cC: string[] = ["a", "b"]; // string of an array
let dD = [1, "d"]; // string or a number array
const eE = [2, "b"]; // string or a number array

let fF = ["red"];
fF.push("blue");
// f.push(true); // throws an error

// other ways of declaring arrays in TS
let fruits: Array<string> = ["Apple", "Watermelon", "Papaya"];
let course: string[] = ["maths", "English"];

// declaring a array with mixed types
const dsa: (string | number | boolean)[] = ["list", 23, true];
//or
let values: Array<string | number> = ["Apple", 2, "Orange", 3, 4, "Banana"];

// TUPLES
var empID: number = 1;
var empName: string = "Beau Iyere";

// Tuple type variable
var employee: [number, string] = [1, "Steve"];

// declare an array of tuple
var employee1: [number, string][];
employee1 = [
  [1, "Steve"],
  [2, "Bill"],
  [3, "Jeff"],
];

// Adding elements to a tuple
var employee: [number, string] = [1, "Steve"];
employee.push(2, "Bill");
console.log(employee); //Output: [1, 'Steve', 2, 'Bill']

// Tuples support optional elements too. Just like in object types, ? means “optional”:
// An array of train fares, which sometimes vary depending on direction
let trainFares: [number, number?][] = [[3.75], [8.25, 7.7], [10.5]];

// Equivalently:
let moreTrainFares: ([number] | [number, number])[] = [
  // ...
];

// Tuples also support rest elements, which you can use to type tuples with minimum lengths:

// A list of strings with at least 1 element
let friends: [string, ...string[]] = ["Sara", "Tali", "Chloe", "Claire"];

// A heterogeneous list
let list: [number, boolean, ...string[]] = [1, false, "a", "b", "c"];

// read only arrays and tuples

// readonly arrays
const numbers: readonly number[] = [1, 2, 3, 4, 5, 6];

// readonly tuples
const person: readonly [string, number] = ["Beau", 26];

// null, undefined, void & never

// function that returns a null value
function anull_value(X: number) {
  if (X < 10) return X;
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

enum language {
  English,
  Spanish,
  Russian,
}

enum language2 {
  English = 0,
  Spanish = 1,
  Russian = 2,
}

// retrieving values from an enum
let myfirstLanguage = language.English;
let mySecondLanguage = language2["Russian"];

// spliting an enum so TS can merge them together
enum Language3 {
  English = 1,
  Spanish = 2,
}

enum Language3 {
  Russian = 3,
  Chinese = 4,
}

// mix string and number values
enum Color {
  Red = "#c10000",
  Blue = "#007ac1",
  Pink = 0xc10050, // A hexadecimal literal
  White = 255, // A decimal literal
}

let red = Color.Red; // Color
let pink = Color.Pink; // Color

let colorD = Color[6]; // this is undefined but TS doesnt stop you so implicitly define it as a constant value
console.log(colorD);

const enum Language4 {
  English,
  Spanish,
  Russian,
}

// Accessing a constant enum key
let enum1 = Language4["English"]; //Language4

// Accessing an invalid enum value
// let enum2 = Language4.Cantonese

// accessing a valid enum value
// let enum3 = Language4[0]

// accessing an invalid enum value
// let enum4 = Language4[6]

// how we use cont enums in TS
const enum Flippable {
  Burger,
  Chair,
  Cup,
  Skateboard,
  Table,
}

function flip(f: Flippable) {
  return "flipped it";
}

console.log(flip(Flippable.Burger)); // returns flipped it
console.log(flip(Flippable.Cup)); // returns flipped it
// flip(12); // returns flipped it

var userName: string = "Beau Iyere";
console.log(userName); 

var numberOfItems: number = 10;
console.log(numberOfItems);