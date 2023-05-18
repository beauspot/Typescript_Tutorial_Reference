declare function detectType(val: number | string): string | number;
declare function ProvideId_(id: string | null): void;
interface __User {
    name: string;
    email: string;
}
interface __Admin {
    name: string;
    email: string;
    isAdmin: boolean;
}
declare function isAdminAcct(acct: __User | __Admin): boolean | undefined;
declare function logValue(x: Date | string): void;
type Fish = {
    swim: () => void;
};
type Bird = {
    fly: () => void;
};
declare function isFish(pet: Fish | Bird): pet is Fish;
declare function getFood(pet: Fish | Bird): "Fish Food" | "bird food";
interface Circle {
    kind: "circle";
    radius: number;
}
interface Square {
    kind: "square";
    side: number;
}
interface Rectangle {
    kind: "rectangle";
    length: number;
    width: number;
}
type Shape = Circle | Square | Rectangle;
declare function getTrueShape(shape: Shape): number | undefined;
declare function getArea(shape: Shape): number;
