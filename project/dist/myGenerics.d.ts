declare const score__: Array<number>;
declare const names: Array<string>;
declare function identityOne(val: boolean | number): boolean | number;
declare function identitytwo(val: any): any;
declare function identityThree<Type>(value: Type): Type;
declare function identityFour<T>(val: T): T;
interface Bottle {
    brand: string;
    type: number;
}
/**
 * Generics are like variables – to be precise, type variables – that store the type (for example number, string, boolean) as a value.
 * take for example
 */
declare function printData(data: number | string | boolean): void;
/**
 * from the printData function,
 * But in the future, you might want to print an array of numbers
 *  using the same function.
 * In that case the types will increase and it will become cumbersome to maintain all those different types.
 *  This is when Generics come into the picture.
 */
declare function PrintData<T>(data: T): void;
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
declare function printMainData<X, Y>(data_1: X, data_2: Y): void;
interface User_Data<X, Y> {
    name: X;
    rollNo: Y;
}
declare const user_: User_Data<string, number>;
