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
/**
 * Interface
 * Class
 * Enum
 * Arrays
 * Tuples
 */
/**
 * any
 * object
 * unknown
 * never
 */
declare let user_name: string;
declare let year: number;
declare let isEnabled: boolean;
declare let guests: string[];
declare const KillBill: (name: string) => string;
declare const passBill: (name: string) => void;
declare let myname: string;
declare let myYear: any;
declare let myGuest: (string | number | boolean)[];
declare let a1: symbol;
declare let b1: symbol;
declare var c1: boolean;
declare const d1: unique symbol;
declare const f1: unique symbol;
declare let h1: boolean;
declare let a: {
    b: string;
};
declare let b: {
    c: {
        d: string;
    };
};
declare let c: {
    firstName: string;
    lastName: string;
};
declare class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string);
}
declare let d: Person;
declare let e: {
    b: number;
    c?: string;
    [key: number]: boolean;
};
declare let user: {
    readonly firstName: string;
};
