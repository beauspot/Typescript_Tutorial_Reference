interface Quiz {
    name: string;
    type: string;
}
interface Course {
    name: string;
    author: string;
    subject: string;
}
declare class Sellable<T> {
    cart: T[];
    addToCart(product: T): void;
}
