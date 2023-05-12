declare function addTwo(num: number): number;
declare function signupUser(val: string): string;
declare function signUpUser(name: string, email: string, password: string, isPaid: boolean): void;
declare let loginUser: (name: string, email: string, isPaid?: boolean) => void;
declare const getHello: (s: string) => string;
declare const heros: string[];
declare function consoleError(errMsg: string): void;
declare const handleError: (errMsg: string) => never;
