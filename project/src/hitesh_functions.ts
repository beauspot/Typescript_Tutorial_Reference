function addTwo(num: number): number {
  return num + 2;
}

function signupUser(val: string) {
  return val.toUpperCase();
}

function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {}

// having a default value in a function
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
heros.map((hero): string => {
  return `the hero is ${hero}`;
});

// A function that doesn't return anything ie VOID
function consoleError(errMsg: string): void {
  console.log(errMsg);
}

// A function that never returns a value ie Never
const handleError = (errMsg: string): never => {
  throw new Error(errMsg);
};

console.log(addTwo(5));
console.log(signupUser("hello"));
console.log(signUpUser("Beau Iyere", "beauspot@outlook.com", "testing", false));
console.log(loginUser("Beau Iyere", "beauspot@outlook.com"));
