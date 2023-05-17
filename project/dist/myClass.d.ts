declare class UserClass__ {
    name: string;
    email: string;
    private age;
    private userID;
    readonly city: string;
    constructor(name: string, email: string, age: number, userID: string);
    private deleteToken;
}
declare class _Person_ {
    _name: string;
    protected _age: number;
    _email: string;
    private _token;
    constructor(_name: string, _age: number, _email: string, _token: string);
    get name(): string;
    set name(value: string);
}
declare class _Animal {
    name: string;
    protected breed: string;
    sound: string;
    constructor(name: string, breed: string, sound: string);
    move(distance: number): string;
    set getSound(makeSound: string);
}
declare class Dog extends _Animal {
    name: string;
    protected breed: string;
    sound: string;
    hasTail: boolean;
    constructor(name: string, breed: string, sound: string, hasTail: boolean);
    bark(): void;
}
