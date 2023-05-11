"use strict";
function subtraction(foo, bar) {
    return foo - bar;
}
function personality(attribute) {
    return `${attribute.sentence} ${attribute.age}`;
}
const attribute = {
    age: 25,
    sentence: "My age is",
};
const getPersonality = personality(attribute);
// console.log(getPersonality);
// using arrow functions
const mainPersonality = (attribute) => `${attribute.sentence} ${attribute.age}`;
const main_attribute = {
    age: 18,
    sentence: "My age is",
};
const personality_2 = mainPersonality(main_attribute);
console.log(personality_2);
const fruitss = [
    { id: 1, name: "apple" },
    { id: 2, name: "Orange" },
];
const getFruitById = async (fruitId) => {
    const findFruit = fruitss.find((fruit) => fruit.id === fruitId);
    if (!findFruit)
        return null;
    return findFruit;
};
const runAsyncFunction = async () => {
    const getFruit = await getFruitById(1);
    return getFruit;
};
function returnUser(firstName, lastName) {
    return `My name is ${firstName} ${lastName}`;
}
const userData = returnUser("Beau", "Iyere");
console.log(userData);
// defining types with a rest parameter
function addition(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}
const adNum = addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(adNum);
const users = [
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
function getUser(idOrPhoneNumber, address) {
    if (typeof idOrPhoneNumber === "string") {
        return users.find((user) => user.phoneNumber === idOrPhoneNumber);
    }
    if (typeof address === "string") {
        return users.find((user) => user.address === address);
    }
    else {
        return users.find((user) => user.id === idOrPhoneNumber);
    }
}
const userById = getUser(1);
const userByPhoneNumber = getUser("08100000000");
const userByAddress = getUser("San Fransisco, California", "Jon Doe");
// Statically Typing Constructors
class Example {
    constructor(a = 1, b = 4) {
        this.a = a;
        this.b = b;
    }
}
// overloads 
class Example1 {
    constructor(xs, y) { }
}
