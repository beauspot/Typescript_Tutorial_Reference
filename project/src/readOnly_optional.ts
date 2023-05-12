type UserAcct = {
    readonly _id: string,
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
};


const user_acct: UserAcct = {
    _id: "12345",
    name: "Beau Iyere",
    email: "beau.iyere@gmail.com",
    isActive: true
}

// Mix and match 
type cardNumber = {
    cardNumber: string;
};

type carddate = {
    caedDate: string;
};

type cardDetails = cardNumber & carddate & {
    cvv: number; 
}