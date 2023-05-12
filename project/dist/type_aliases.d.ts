type User_Detail = {
    name: string;
    age: number;
    email: string;
    isActive: boolean;
};
declare function createNewUser(user: User_Detail): User_Detail;
