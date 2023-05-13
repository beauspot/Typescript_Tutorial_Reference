const superHeros: string[] = [];
const heroPower: number[] = [];

// Another way of defining an array in Typescript
const SuperVillian: Array<string> = [];

type UserDetail = {
  name: string;
  isActive: boolean;
};

const allUsers: UserDetail[] = [];
allUsers.push({ name: "Beau Iyere", isActive: true });
console.log(allUsers);
