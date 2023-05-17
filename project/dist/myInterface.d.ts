interface User__ {
    readonly _id: number;
    email: string;
    userId: number;
    gogoleID?: string;
    startTrial: () => string;
    startBasics(): string;
    getCoupons(couponName: string, value: number): number;
}
interface User__ {
    githubID: string;
}
interface Admin extends User__ {
    role: "admin" | "user" | "super_admin";
}
declare const hitesh: User__;
declare const admin_user: Admin;
