function calcTotalPrice(price: number) {
  return price + price * 0.18;
}

const priceOfToy = calcTotalPrice(100);
const discountedPrice = priceOfToy / 2;
console.log(discountedPrice);

const calTotalPrice = (price: number): number =>
  +(price + price * 0.18).toFixed(1);
const priceOfItem = calTotalPrice(1234);
const DP = priceOfItem / 2;
console.log(DP);

// Signature overloading Functions
// function processData(data: string): string;
// function processData(data: number): number;
function processData(data: string | number): string | number {
  if (typeof data === "string") return `Processed: ${data}`;
  else if (typeof data === "number") return data * 2;
  else throw new Error("Invalid data type");
}

const actualprocesseddata = processData(100);
console.log(actualprocesseddata);

// Polymorphic or Generic Functions
function swap<T>(a: T, b: T): void {
  let temp: T = a;
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
