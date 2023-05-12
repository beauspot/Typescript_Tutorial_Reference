type UserAcct = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
};
declare const user_acct: UserAcct;
type cardNumber = {
    cardNumber: string;
};
type carddate = {
    caedDate: string;
};
type cardDetails = cardNumber & carddate & {
    cvv: number;
};
