declare function subtraction(foo: number, bar: number): number;
interface Attribute {
    age: number;
    sentence: string;
}
declare function personality(attribute: Attribute): string;
declare const attribute: Attribute;
declare const getPersonality: string;
declare const mainPersonality: (attribute: Attribute) => string;
declare const main_attribute: Attribute;
declare const personality_2: string;
interface Fruit {
    id: number;
    name: string;
}
declare const fruitss: Fruit[];
declare const getFruitById: (fruitId: number) => Promise<Fruit | null>;
declare const runAsyncFunction: () => Promise<Fruit | null>;
interface Animal {
    id: number;
    name: string | null;
    type?: string;
}
declare function returnUser(firstName: string, lastName?: string): string;
declare const userData: string;
declare function addition(...args: number[]): number;
declare const adNum: number;
interface User {
    id: number;
    phoneNumber: string;
    fullname: string;
    address: string;
}
declare const users: User[];
declare function getUser(idOrPhoneNumber: number | string, address?: string): User | undefined;
declare const userById: User | undefined;
declare const userByPhoneNumber: User | undefined;
declare const userByAddress: User | undefined;
declare class Example {
    a: number;
    b: number;
    constructor(a?: number, b?: number);
}
declare class Example1 {
    constructor(a: number, b: string);
}
