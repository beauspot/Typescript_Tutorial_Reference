declare const User: {
    name: string;
    email: string;
    isActive: boolean;
};
declare function createUser({ name, isPaid }: {
    name: string;
    isPaid: boolean;
}): void;
declare function createCourse(): {
    name: string;
    price: number;
};
