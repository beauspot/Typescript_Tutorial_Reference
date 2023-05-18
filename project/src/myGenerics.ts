const score__: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identitytwo(val: any): any {
  return val;
}

function identityThree<Type>(value: Type): Type {
  return value;
}

identityThree(3);

// Most used when defining generics
function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

/* function identityFive<Bottle>({}): Bottle {
  
} */

// more on generics from freecode camp.
/**
 * Generics are like variables – to be precise, type variables – that store the type (for example number, string, boolean) as a value.
 * take for example
 */

function printData(data: number | string | boolean) {
  console.log("data: ", data);
}

printData(2);
printData("hello");
printData(true);

/**
 * from the printData function,
 * But in the future, you might want to print an array of numbers
 *  using the same function.
 * In that case the types will increase and it will become cumbersome to maintain all those different types.
 *  This is when Generics come into the picture.
 */

// printData Generics
function PrintData<T>(data: T) {
  console.log(`data: ${data}`);
}

PrintData(2);
PrintData(true);
PrintData("hello");
PrintData([1, 2, 3, 4, 5, 6]);
PrintData([1, 2, 3, "hi"]);
PrintData({ name: "Ram", rollNo: 1 });

/**
In the above example printData-generics.ts, there is a slight difference in syntax:
You use a type variable inside angular brackets after the function name <T>
You then assign the type variable to the parameter data: T
Let's explore these differences a bit more.
To use generics, you need to use angular brackets and then specify a type variable inside them. 
Developers generally use T, X and Y. But it can be anything depending upon your preference.
You can then assign the same variable name as the type to the parameter of the function.
Now, whatever argument you pass to the function, it gets inferred and there's no need to hardcode the type anywhere.
Even if you pass an array of numbers or an object to the printData function, everything will be displayed properly without TS complaining:
 */

//Another Example
function printMainData<X, Y>(data_1: X, data_2: Y) {
  console.log("Output is: ", data_1, data_2);
}

printMainData([1, 2, 3, 4, 5, 6], true);
printMainData("Hello", "World");
printMainData(true, 12345);
printMainData(true, [
  "hello world",
  true,
  { name: "Beau", age: 26, isregistered: true },
]);

// Using Generics with interface
interface User_Data<X, Y> {
    name: X;
    rollNo: Y;
};

const user_: User_Data<string, number> = {
    name: "Beau Iyere",
    rollNo: 12345
}