type User_Detail = {
    name: string;
    age: number;
    email: string;
    isActive: boolean;
};

function createNewUser(user: User_Detail): User_Detail{ 
    return user;
}

createNewUser({name: "", email: "", isActive: true, age: 30})