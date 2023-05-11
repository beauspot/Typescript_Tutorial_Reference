function subtraction(foo: number, bar: number): number {
  return foo - bar;
}

// console.log(subtraction(5, 8));

// declaring a function using type interfaces
interface Attribute {
  age: number;
  sentence: string;
}

function personality(attribute: Attribute): string {
  return `${attribute.sentence} ${attribute.age}`;
}

const attribute: Attribute = {
  age: 25,
  sentence: "My age is",
};

const getPersonality = personality(attribute);
// console.log(getPersonality);

// using arrow functions
const mainPersonality = (attribute: Attribute): string =>
  `${attribute.sentence} ${attribute.age}`;

const main_attribute: Attribute = {
  age: 18,
  sentence: "My age is",
};

const personality_2 = mainPersonality(main_attribute);
console.log(personality_2);

// Asynchronous function
interface Fruit {
  id: number;
  name: string;
}

const fruitss: Fruit[] = [
  { id: 1, name: "apple" },
  { id: 2, name: "Orange" },
];

const getFruitById = async (fruitId: number): Promise<Fruit | null> => {
  const findFruit = fruitss.find((fruit) => fruit.id === fruitId);
  if (!findFruit) return null;
  return findFruit;
};

const runAsyncFunction = async () => {
  const getFruit = await getFruitById(1);
  return getFruit;
};

// Functions with optional parameters
interface Animal {
  id: number;
  name: string | null;
  type?: string;
}

function returnUser(firstName: string, lastName?: string) {
  return `My name is ${firstName} ${lastName}`;
}

const userData = returnUser("Beau", "Iyere");
console.log(userData);

// defining types with a rest parameter
function addition(...args: number[]) {
  let result: number = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

const adNum = addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(adNum);

// Function Overloads
interface User {
  id: number;
  phoneNumber: string;
  fullname: string;
  address: string;
}

const users: User[] = [
  {
    id: 1,
    phoneNumber: "123-456-7890",
    fullname: "First User",
    address: "Santa fe, florida",
  },
  {
    id: 2,
    phoneNumber: "08111111111",
    fullname: "Second User",
    address: "San Fransisco, California",
  },
];

// function getUser(id: number): User | undefined;
// function getUser(phoneNumber: string): User | undefined;
// function getUser(address: string, fullName: string): User | undefined

function getUser(
  idOrPhoneNumber: number | string,
  address?: string
): User | undefined {
  if (typeof idOrPhoneNumber === "string") {
    return users.find((user) => user.phoneNumber === idOrPhoneNumber);
  }

  if (typeof address === "string") {
    return users.find((user) => user.address === address);
  } else {
    return users.find((user) => user.id === idOrPhoneNumber);
  }
}

const userById = getUser(1);
const userByPhoneNumber = getUser("08100000000");
const userByAddress = getUser("San Fransisco, California", "Jon Doe");

// Statically Typing Constructors
class Example {
  a: number;
  b: number;

  constructor(a = 1, b = 4) {
    this.a = a;
    this.b = b;
  }
}

// overloads 
class Example1 {
  constructor(a: number, b: string);
  constructor(xs: any, y?: any) {}
}

