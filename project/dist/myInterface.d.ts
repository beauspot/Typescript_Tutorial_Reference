interface User__ {
    readonly _id: number;
    email: string;
    userId: number;
    gogoleID?: string;
    startTrial: () => string;
    startBasics(): string;
    getCoupons(couponName: string, value: number): number;
}
declare const hitesh: User__;
